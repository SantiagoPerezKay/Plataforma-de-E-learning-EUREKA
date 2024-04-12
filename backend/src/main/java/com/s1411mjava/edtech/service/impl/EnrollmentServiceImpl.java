package com.s1411mjava.edtech.service.impl;

import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.entity.Enrollment;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.exception.InvalidValueException;
import com.s1411mjava.edtech.mapper.EnrollmentMapper;
import com.s1411mjava.edtech.repository.CourseRepository;
import com.s1411mjava.edtech.repository.EnrollmentRepository;
import com.s1411mjava.edtech.repository.UserRepository;
import com.s1411mjava.edtech.service.EnrollmentService;
import com.s1411mjava.edtech.service.ProgressService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class EnrollmentServiceImpl implements EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final EnrollmentMapper enrollmentMapper;
    private final CourseRepository courseRepository;

    private final ProgressService progressService;


    @Override
    public List<EnrollmentDto> findAllByStudent() {
        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        Optional<User> optionalUser = Optional.ofNullable(this.userRepository.findByEmail(authenticatedEmail));

        if(optionalUser.isEmpty()){
            throw new AccessDeniedException("You are not authenticated");
        }

        return this.enrollmentMapper.toDto(this.enrollmentRepository.findAllByUser(optionalUser.get()));
    }


    @Override
    public EnrollmentDto qualificationCourse(Long idEnrollment, Integer value) {
        if (value<1 || value >5){
            throw new InvalidValueException("invalid value");
        }

        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<User> optionalUser = Optional.ofNullable(this.userRepository.findByEmail(authenticatedEmail));
        Enrollment enrollment = enrollmentRepository.findById(idEnrollment).orElseThrow();

        optionalUser.orElseThrow(() -> new AccessDeniedException("You are not authenticated"));
        if (!optionalUser.get().getEmail().equals(enrollment.getUser().getEmail())) {
            throw new AccessDeniedException("You are not authenticated");
        }

        enrollment.setQualification(value);
        Enrollment savedEnrollment = enrollmentRepository.save(enrollment);
        Course course = savedEnrollment.getCourse();
        List<Enrollment> enrollmentsForCourse = enrollmentRepository.findAllByCourse(course);

        int sum = 0;
        for (Enrollment enr : enrollmentsForCourse) {
            if (enr.getQualification() != null) {
                sum += enr.getQualification();
            }
        }

        float avgStars = (float)sum / (float)enrollmentsForCourse.size();

        course.setAvgStars(avgStars);
        courseRepository.save(course);

        return this.enrollmentMapper.toDto(savedEnrollment);
    }



    @Override
    public EnrollmentDto createEnrollment(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new EntityNotFoundException("Course not found with id: " + courseId));

        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = Optional.ofNullable(this.userRepository.findByEmail(authenticatedEmail)).orElseThrow();

        Enrollment enrollment = new Enrollment();
        enrollment.setCourse(course);
        enrollment.setUser(user);
        enrollment.setCreationDate(new Date()); // Set current date/time


        enrollment = enrollmentRepository.save(enrollment);


        progressService.createProgressByEnrollment(enrollment);

        return enrollmentMapper.toDto(enrollment);
    }






}



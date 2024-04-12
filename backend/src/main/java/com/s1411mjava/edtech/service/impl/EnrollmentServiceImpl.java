package com.s1411mjava.edtech.service.impl;

import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.entity.Enrollment;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.mapper.EnrollmentMapper;
import com.s1411mjava.edtech.repository.CourseRepository;
import com.s1411mjava.edtech.repository.EnrollmentRepository;
import com.s1411mjava.edtech.repository.UserRepository;
import com.s1411mjava.edtech.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class EnrollmentServiceImpl implements EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final EnrollmentMapper enrollmentMapper;
    private final CourseRepository courseRepository;

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
        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        Optional<User> optionalUser = Optional.ofNullable(this.userRepository.findByEmail(authenticatedEmail));
        Enrollment enrollment = enrollmentRepository.findById(idEnrollment).orElseThrow();

        // auth
        optionalUser.orElseThrow(() -> new AccessDeniedException("You are not authenticated"));
        if (!optionalUser.get().getEmail().equals(enrollment.getUser().getEmail())) {
            throw new AccessDeniedException("You are not authenticated");
        }

        // update qualification
        enrollment.setQualification(value);
        Enrollment savedEnrollment = enrollmentRepository.save(enrollment);

        // Course
        Course course = savedEnrollment.getCourse();

        // List course
        List<Enrollment> enrollmentsForCourse = enrollmentRepository.findAllByCourse(course);



        // AVG Calculation
        int sum = 0;
        for (Enrollment enr : enrollmentsForCourse) {
            if (enr.getQualification() != null) {
                sum += enr.getQualification();
            }
        }
        float avgStars = (float) sum / enrollmentsForCourse.size();

        // Update AVG
        course.setAvgStars(avgStars);
        courseRepository.save(course);

        return this.enrollmentMapper.toDto(savedEnrollment);
    }









}


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
        public EnrollmentDto createEnrollment(Long courseId, Long userId) {
            Course course = courseRepository.findById(courseId)
                    .orElseThrow(() -> new EntityNotFoundException("Course not found with id: " + courseId));

            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));

            Enrollment enrollment = new Enrollment();
            enrollment.setCourse(course);
            enrollment.setUser(user);
            enrollment.setCreationDate(new Date()); // Set current date/time


            enrollment = enrollmentRepository.save(enrollment);

            return EnrollmentMapper.toDto(enrollment);
        }
    }



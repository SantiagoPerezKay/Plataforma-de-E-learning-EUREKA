package com.s1411mjava.edtech.service.impl;


import com.s1411mjava.edtech.dtos.CourseModuleDto;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.entity.Enrollment;
import com.s1411mjava.edtech.entity.Progress;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.exception.ResourceNotFoundException;
import com.s1411mjava.edtech.mapper.CourseModuleMapper;
import com.s1411mjava.edtech.repository.CourseRepository;
import com.s1411mjava.edtech.repository.EnrollmentRepository;
import com.s1411mjava.edtech.repository.ProgressRepository;
import com.s1411mjava.edtech.repository.UserRepository;
import com.s1411mjava.edtech.service.CourseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;
    private final CourseModuleMapper courseMapper;
    private final ProgressRepository progressRepository;
    private final UserRepository userRepository;
    private final EnrollmentRepository enrollmentRepository;

    @Override
    public CourseModuleDto getCourseForUser(Long courseId) {

        Course course = courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Course not found"));

        User user = Optional.of(userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName())).orElseThrow(() -> new ResourceNotFoundException("User not found"));

        CourseModuleDto courseModuleDto = courseMapper.toDto(course);

        Enrollment enrollment = enrollmentRepository.findByUserIdAndCourseId(user.getId(), course.getId()).orElseThrow(() -> new ResourceNotFoundException("Enrollment not found"));

        try {
            courseModuleDto.getModules().forEach(module -> {
                module.getContents().forEach(content -> {
                    Optional<Progress> progress = progressRepository.findByContentIdAndEnrollmentId(content.getId(), enrollment.getId());
                    if (progress.isEmpty()) {
                        content.setProgress(new CourseModuleDto.ProgressDto(null, false));
                    }
                    content.setProgress(new CourseModuleDto.ProgressDto(progress.get().getId(), progress.get().isCompleted()));
                });
            });
        } catch (Exception e) {
            log.error("Error getting progress: {}", e.getMessage());
        }

        return courseModuleDto;
    }
}

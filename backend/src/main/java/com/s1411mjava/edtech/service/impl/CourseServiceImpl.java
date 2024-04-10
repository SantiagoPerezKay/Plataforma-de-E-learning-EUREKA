package com.s1411mjava.edtech.service.impl;


import com.s1411mjava.edtech.dtos.CourseModuleDto;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.exception.ResourceNotFoundException;
import com.s1411mjava.edtech.mapper.CourseModuleMapper;
import com.s1411mjava.edtech.repository.CourseRepository;
import com.s1411mjava.edtech.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;
    private final CourseModuleMapper CourseMapper;



    @Override
    public List<CourseModuleDto> getCourseForUser(Long courseId) {

        Course course = courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Course not found"));
        return Collections.singletonList(CourseMapper.toDto(course));
    }
}

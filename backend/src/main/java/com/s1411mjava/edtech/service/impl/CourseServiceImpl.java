package com.s1411mjava.edtech.service.impl;


import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.dtos.MyCourseDto;
import com.s1411mjava.edtech.entity.Module;
import com.s1411mjava.edtech.mapper.MyCourseMapper;
import com.s1411mjava.edtech.repository.ModuleRepository;
import com.s1411mjava.edtech.service.CourseService;
import com.s1411mjava.edtech.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final EnrollmentService enrollmentService;
    private final ModuleRepository moduleRepository;
    private final MyCourseMapper myCourseMapper;



    @Override
    public List<MyCourseDto> getCoursesForUser(Long userId) {
        List<EnrollmentDto> enrollmentDtos = enrollmentService.findAllByStudent(userId);
        List<Long> courseIds = Collections.singletonList(enrollmentDtos.stream().iterator().next().getCourse().getId());
        List<List<Module>> modulesList = courseIds.stream()
                .map(moduleRepository::findByCourseId)
                .toList();

        return modulesList.stream().map((List<Module> module) -> myCourseMapper.toDto((Module) module)).collect(Collectors.toList());
    }
}

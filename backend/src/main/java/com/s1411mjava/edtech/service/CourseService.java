package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.CourseModuleDto;

import java.util.List;

public interface CourseService {

    List<CourseModuleDto> getCourseForUser(Long courseId);
}

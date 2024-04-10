package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.MyCourseDto;

import java.util.List;

public interface CourseService {

    List<MyCourseDto> getCoursesForUser(Long userId);
}

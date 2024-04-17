package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.*;

import java.util.List;

public interface TeacherService {
    TeacherOutDto createTeacher(TeacherInDto teacherInDto);

    CreatedCourseDTO createCourse(CreateCourseDTO createCourseDTO);

    List<CatalogDto> getCourses();
}

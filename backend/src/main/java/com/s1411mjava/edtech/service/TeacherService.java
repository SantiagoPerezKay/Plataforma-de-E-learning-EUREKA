package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.*;

import java.util.List;

public interface TeacherService {
    TeacherDto createTeacher(TeacherDto teacherDto);

    CreatedCourseDTO createCourse(CreateCourseDTO createCourseDTO);

    List<CatalogDto> getCourses();

    VerifiedDto verify();
}

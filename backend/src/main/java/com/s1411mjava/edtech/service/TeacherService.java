package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.CatalogDto;
import com.s1411mjava.edtech.dtos.CreateCourseDTO;
import com.s1411mjava.edtech.dtos.CreatedCourseDTO;
import com.s1411mjava.edtech.dtos.TeacherDto;

import java.util.List;

public interface TeacherService {
    TeacherDto createTeacher(TeacherDto teacherDto);

    CreatedCourseDTO createCourse(CreateCourseDTO createCourseDTO);

    List<CatalogDto> getCourses();
}

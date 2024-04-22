package com.s1411mjava.edtech.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.s1411mjava.edtech.dtos.*;
import org.springframework.web.bind.MethodArgumentNotValidException;

import java.util.List;

public interface TeacherService {
    TeacherOutDto createTeacher(TeacherInDto teacherInDto);

    CreatedCourseDTO createCourse(CreateCourseDTO createCourseDTO);

    List<CatalogDto> getCourses();

    TeacherOutDto getProfileTeacher(Long id);

    VerifiedDto verify();

    CreatedCourseDTO getCourseById(Long courseId);
}

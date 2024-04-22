package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.EnrollmentDto;

import java.util.List;

public interface EnrollmentService {
    List<EnrollmentDto> findAllByStudent();

    EnrollmentDto qualificationCourse(Long idEnrollment,Integer value);

    EnrollmentDto createEnrollment(Long courseId);


}

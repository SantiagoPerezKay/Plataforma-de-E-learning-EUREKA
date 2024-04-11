package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.EnrollmentDto;

import java.util.List;

public interface EnrollmentService {
    List<EnrollmentDto> findAllByStudent();
    EnrollmentDto createEnrollment(Long courseId);

}

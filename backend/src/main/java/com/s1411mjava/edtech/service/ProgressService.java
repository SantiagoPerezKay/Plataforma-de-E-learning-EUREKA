package com.s1411mjava.edtech.service;


import com.s1411mjava.edtech.dtos.ProgressDto;
import com.s1411mjava.edtech.entity.Enrollment;

public interface ProgressService {

    public void createProgressByEnrollment(Enrollment enrollment);

    ProgressDto check(Long progressId);
}

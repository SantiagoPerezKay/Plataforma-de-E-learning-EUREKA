package com.s1411mjava.edtech.service.impl;

import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.mapper.EnrollmentMapper;
import com.s1411mjava.edtech.repository.EnrollmentRepository;
import com.s1411mjava.edtech.repository.UserRepository;
import com.s1411mjava.edtech.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class EnrollmentServiceImpl implements EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final EnrollmentMapper enrollmentMapper;

    @Override
    public List<EnrollmentDto> findAllByStudent() {
        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        Optional<User> optionalUser = Optional.ofNullable(this.userRepository.findByEmail(authenticatedEmail));

        if(optionalUser.isEmpty()){
            throw new AccessDeniedException("You are not authenticated");
        }

        return this.enrollmentMapper.toDto(this.enrollmentRepository.findAllByUser(optionalUser.get()));
    }

    @Override
    public void qualificationCourse(Long idEnrollment,Integer value) {
        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        Optional<User> optionalUser = Optional.ofNullable(this.userRepository.findByEmail(authenticatedEmail));

        if(optionalUser.isEmpty()){
            throw new AccessDeniedException("You are not authenticated");
        }

        //update value enrollment
        enrollmentRepository.findById(idEnrollment).get().setQualification(value);

        //Update avg calification course

    }









}


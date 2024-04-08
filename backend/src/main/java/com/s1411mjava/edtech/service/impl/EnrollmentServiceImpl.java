package com.s1411mjava.edtech.service.impl;

import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.exception.IdLessThanOneException;
import com.s1411mjava.edtech.exception.IdNotNullException;
import com.s1411mjava.edtech.exception.StudentNotFoundException;
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
    public List<EnrollmentDto> findAllByStudent(Long studentId) {
        this.validId(studentId);

        Optional<User> optionalUser = this.userRepository.findById(studentId);

        if(optionalUser.isEmpty()){
            throw new StudentNotFoundException(studentId.toString());
        }

        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        if(!optionalUser.get().getEmail().equals(authenticatedEmail)){
            throw new AccessDeniedException("You do not have permission to view another students enrollment");
        }

        return this.enrollmentMapper.toDto(this.enrollmentRepository.findAllByUser(optionalUser.get()));
    }

    private void validId(Long id){
        if(id == null){
            throw new IdNotNullException();
        }

        if(id < 1){
            throw new IdLessThanOneException();
        }
    }
}

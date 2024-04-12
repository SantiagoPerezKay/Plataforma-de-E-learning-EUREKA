package com.s1411mjava.edtech.service.impl;


import com.s1411mjava.edtech.dtos.ProgressDto;
import com.s1411mjava.edtech.entity.Content;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.entity.Enrollment;
import com.s1411mjava.edtech.entity.Progress;
import com.s1411mjava.edtech.exception.IdLessThanOneException;
import com.s1411mjava.edtech.exception.IdNotNullException;
import com.s1411mjava.edtech.exception.ProgressNotFoundException;
import com.s1411mjava.edtech.mapper.ProgressMapper;
import com.s1411mjava.edtech.repository.ProgressRepository;
import com.s1411mjava.edtech.service.ProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProgressServiceImpl implements ProgressService {
    private final ProgressRepository progressRepository;
    private final ProgressMapper progressMapper;

    @Transactional
    @Override
    public ProgressDto check(Long progressId) {
        this.validId(progressId);

        Optional<Progress> optionalProgress = this.progressRepository.findById(progressId);

        if(optionalProgress.isEmpty()){
            throw new ProgressNotFoundException("Not found progress with ID: " + progressId);
        }

        Progress progress = optionalProgress.get();

        String authenticatedEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        if(!progress.getEnrollment().getUser().getEmail().equals(authenticatedEmail)){
            throw new AccessDeniedException("You must have access to progress that is yours");
        }

        if(!progress.isCompleted()){
            progress.setCompleted(true);
        }

        return this.progressMapper.toDto(progress);
    }

    private void validId(Long id){
        if(id == null){
            throw new IdNotNullException();
        }

        if(id < 1){
            throw new IdLessThanOneException();
        }
    }

    public void createProgressByEnrollment (Enrollment enrollment){

        Course course = enrollment.getCourse();

        List<Content> contentList = course.getModules().stream().flatMap(module -> module.getContents().stream())
                .toList();

        List<Progress> progressList = new ArrayList<>();

        for(Content content : contentList){
            Progress progress = new Progress();
            progress.setCompleted(false);
            progress.setEnrollment(enrollment);
            progressList.add(progress);
        }

        // Crear el registro de progreso
        progressRepository.saveAll(progressList);
    }
}

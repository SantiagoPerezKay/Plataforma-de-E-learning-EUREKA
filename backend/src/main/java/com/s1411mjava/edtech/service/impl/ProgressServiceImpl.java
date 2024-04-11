package com.s1411mjava.edtech.service.impl;


import com.s1411mjava.edtech.entity.Content;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.entity.Enrollment;
import com.s1411mjava.edtech.entity.Progress;
import com.s1411mjava.edtech.repository.ProgressRespository;
import com.s1411mjava.edtech.service.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProgressServiceImpl implements ProgressService {
    @Autowired
    private ProgressRespository progressRepository;

    public void createProgressByEnrollment (Enrollment enrollment){

        Course course = enrollment.getCourse();

        List<Content> contentList = course.getModules().stream().flatMap(module -> module.getContents().stream())
                .collect(Collectors.toList());

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

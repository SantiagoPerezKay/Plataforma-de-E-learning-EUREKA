package com.s1411mjava.edtech.service.impl;

import com.s1411mjava.edtech.dtos.CatalogDto;
import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.mapper.CatalogMapper;
import com.s1411mjava.edtech.mapper.EnrollmentMapper;
import com.s1411mjava.edtech.repository.CourseRepository;
import com.s1411mjava.edtech.service.CatalogService;
import com.s1411mjava.edtech.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CatalogServiceImpl implements CatalogService {


        private final CourseRepository courseRepository;
        private final CatalogMapper catalogMapper;

        @Override
        public List<CatalogDto> findAllCatalog() {
                List<Course> courses = findAllCourse();
                List<CatalogDto> catalogDtoList = new ArrayList<>();
                for (Course course : courses) {
                        catalogDtoList.add(catalogMapper.toDto(course));
                }
                return catalogDtoList;
        }
        public List<Course> findAllCourse() {
                return  courseRepository.findAll().stream().toList();
        }
}

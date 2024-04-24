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
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
@Slf4j
public class CatalogServiceImpl implements CatalogService {


        private final CourseRepository courseRepository;
        private final CatalogMapper catalogMapper;

        @Override
        @Cacheable(value = "catalog", unless = "#result == null || #result.size() == 0")
        public List<CatalogDto> findAllCatalog() {

                long startTime = System.currentTimeMillis();

                List<Course> courses = courseRepository.findAllCatalog();

                long endTime = System.currentTimeMillis();

                long duration = endTime - startTime;

                double seconds = (double)duration / 1000;

                log.info("Tiempo de ejecución: " + seconds + " segundos");

                List<CatalogDto> catalogDtoList = new ArrayList<>();
                for (Course course : courses) {
                        catalogDtoList.add(catalogMapper.toDto(course));
                }
                return catalogDtoList;
        }
}

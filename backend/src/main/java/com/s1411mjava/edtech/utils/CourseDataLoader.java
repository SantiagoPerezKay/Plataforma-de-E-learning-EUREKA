package com.s1411mjava.edtech.utils;


import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.logging.Logger;


@RequiredArgsConstructor
@Component
public class CourseDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(CourseDataLoader);
    private final CourseRepository repository;

    public CourseDataLoader(CourseRepository repository) {
        this.repository = repository;
    }
    @Override
    public void run(String... args) throws Exception {
        logger.info("Loading data...");
        List<Course> courses =
    }
}

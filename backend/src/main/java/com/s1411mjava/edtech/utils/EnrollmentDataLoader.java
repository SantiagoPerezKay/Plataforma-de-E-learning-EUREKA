package com.s1411mjava.edtech.utils;

import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.entity.Enrollment;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.repository.CourseRepository;
import com.s1411mjava.edtech.repository.EnrollmentRepository;
import com.s1411mjava.edtech.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

//@Component
@Slf4j
//@Order(5)
@RequiredArgsConstructor
public class EnrollmentDataLoader implements CommandLineRunner {

    private final EnrollmentRepository enrollmentRepository;
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        loadEnrollments();
    }

    private void loadEnrollments(){

        log.info("Cargar inscripciones...");

        List<Course> courseList = courseRepository.findAllById(List.of(1L, 2L, 7L, 13L, 14L, 21L));

        User user1 = userRepository.findById(1L).orElseThrow();
        User user2 = userRepository.findById(2L).orElseThrow();

        List<Enrollment> enrollmentList = new ArrayList<>();

        for(int i = 0; i < 4; i++){
            enrollmentList.add(
                    Enrollment.builder()
                            .user(user1)
                            .course(courseList.get(i))
                            .build()
            );
        }

        for(int i = 2; i < courseList.size(); i++){
            enrollmentList.add(
                    Enrollment.builder()
                            .user(user2)
                            .course(courseList.get(i))
                            .build()
            );
        }

        enrollmentRepository.saveAll(enrollmentList);

    }
}

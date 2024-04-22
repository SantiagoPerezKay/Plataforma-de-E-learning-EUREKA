package com.s1411mjava.edtech.repository;

import com.s1411mjava.edtech.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository <Course, Long> {
    List<Course> findAllByTeacherId(Long teacherId);

    @Query("SELECT new com.s1411mjava.edtech.entity.Course(c.id, c.title, c.description, c.image, c.avgStars) FROM Course c")
    List<Course> findAllCatalog();
}

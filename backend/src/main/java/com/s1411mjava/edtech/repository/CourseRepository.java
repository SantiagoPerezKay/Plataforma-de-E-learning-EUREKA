package com.s1411mjava.edtech.repository;

import com.s1411mjava.edtech.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository <Course, Long> {

}

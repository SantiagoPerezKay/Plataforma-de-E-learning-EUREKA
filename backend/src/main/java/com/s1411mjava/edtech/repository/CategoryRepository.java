package com.s1411mjava.edtech.repository;

import com.s1411mjava.edtech.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Course, Long> {
}

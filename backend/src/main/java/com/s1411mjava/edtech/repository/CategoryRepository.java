package com.s1411mjava.edtech.repository;

import com.s1411mjava.edtech.entity.Category;
import com.s1411mjava.edtech.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}

package com.s1411mjava.edtech.repository;

import com.s1411mjava.edtech.entity.Teacher;
import com.s1411mjava.edtech.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    Optional<Teacher> findByUser(User user);

    boolean existsByUser(User currentUser);
}
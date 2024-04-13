package com.s1411mjava.edtech.repository;

import com.s1411mjava.edtech.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {
    Optional<Progress> findByContentIdAndEnrollmentId(Long id, Long id1);
}

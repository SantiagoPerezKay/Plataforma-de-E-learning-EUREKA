package com.s1411mjava.edtech.controller;

import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.service.EnrollmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/enrollments")
@Tag(name = "Enrollments")
public class EnrollmentController {
    private final EnrollmentService enrollmentService;

    @Operation(description = "Get all enrollments for a student. Role: STUDENT.")
    @GetMapping("/students")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_STUDENT')")
    public ResponseEntity<List<EnrollmentDto>> findAllByStudent(){
        return ResponseEntity.ok(this.enrollmentService.findAllByStudent());
    }
}

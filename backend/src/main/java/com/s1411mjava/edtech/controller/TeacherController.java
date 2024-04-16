package com.s1411mjava.edtech.controller;
import com.s1411mjava.edtech.dtos.CatalogDto;
import com.s1411mjava.edtech.dtos.CreateCourseDTO;
import com.s1411mjava.edtech.dtos.CreatedCourseDTO;
import com.s1411mjava.edtech.dtos.TeacherDto;
import com.s1411mjava.edtech.service.TeacherService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/teachers")
@Tag(name = "Teachers")
public class TeacherController {
    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }
    @Operation(description = "Create a new teacher.")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_TEACHER')")
    @PostMapping()
    public ResponseEntity<TeacherDto> registerTeacher(@RequestBody TeacherDto teacherDto) {
        TeacherDto createdTeacher = teacherService.createTeacher(teacherDto);
        return new ResponseEntity<>(createdTeacher, HttpStatus.CREATED);
    }

    @PostMapping("/courses")
    @Operation(description = "Create a new course.")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_TEACHER')")
    public ResponseEntity<CreatedCourseDTO> createCourse(@Valid @RequestBody CreateCourseDTO createCourseDTO) {
        CreatedCourseDTO createdCourseDTO = teacherService.createCourse(createCourseDTO);
        return new ResponseEntity<>(createdCourseDTO, HttpStatus.CREATED);
    }

    @GetMapping("/courses")
    @Operation(description = "Get courses by teacher id.")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_TEACHER')")
    public ResponseEntity<List<CatalogDto>>getCourses() {
        return ResponseEntity.ok(Collections.singletonList(teacherService.getCourses()));
    }

}


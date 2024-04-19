package com.s1411mjava.edtech.controller;
import com.s1411mjava.edtech.dtos.*;
import com.s1411mjava.edtech.service.TeacherService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<TeacherOutDto> registerTeacher(@Valid @RequestBody TeacherInDto teacherInDto) {
        TeacherOutDto createdTeacher = teacherService.createTeacher(teacherInDto);
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
    public ResponseEntity<List<CatalogDto>> getCourses() {
        List<CatalogDto> courses = teacherService.getCourses();
        if (courses.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(courses);
        }
    }

    @GetMapping("/{id}")
    @Operation(description = "Get techear profile")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_TEACHER')")
    public ResponseEntity<TeacherOutDto> getTeacherProfile(@PathVariable Long id) {


            return new ResponseEntity<>( teacherService.getProfileTeacher(id),HttpStatus.OK);

    }

    @GetMapping("/verified")
    @Operation(description = "Validates if a user is a verified teacher.")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_TEACHER')")
    public ResponseEntity<VerifiedDto> verify(){
        return ResponseEntity.ok(this.teacherService.verify());
    }

    @GetMapping("/courses/{courseId}")
    @Operation(description = "Get course by teacher id and course id.")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_TEACHER')")
    public ResponseEntity<CreatedCourseDTO> getCourseById(@PathVariable Long courseId) {
        return new ResponseEntity<>(teacherService.getCourseById(courseId), HttpStatus.OK);
    }
}


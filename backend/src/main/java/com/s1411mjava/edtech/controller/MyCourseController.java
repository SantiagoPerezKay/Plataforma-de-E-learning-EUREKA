package com.s1411mjava.edtech.controller;


import com.s1411mjava.edtech.dtos.CourseModuleDto;
import com.s1411mjava.edtech.service.CourseService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mycourses")
@Tag(name = "MyCourses")
public class MyCourseController {
        private final CourseService courseService;

    @Operation(description = "Get course for a student. Role: STUDENT.")
    @GetMapping("/{courseId}")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_STUDENT')")
    public ResponseEntity<CourseModuleDto> findCoursesById(@PathVariable Long courseId){
        return ResponseEntity.ok(this.courseService.getCourseForUser(courseId));
    }
}

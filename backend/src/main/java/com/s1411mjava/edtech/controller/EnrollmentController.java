package com.s1411mjava.edtech.controller;

import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.repository.EnrollmentRepository;
import com.s1411mjava.edtech.service.EnrollmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/enrollments")
@Tag(name = "Enrollments")
public class EnrollmentController {
    private final EnrollmentService enrollmentService;
    //esto no deberia ir aca, deberia devolver un enrollment en service CORREGIR DESPUES DE LA ENTREGA :O
    private final EnrollmentRepository enrollmentRepository;

    @Operation(description = "Get all enrollments for a student. Role: STUDENT.")
    @GetMapping("/students")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_STUDENT')")
    public ResponseEntity<List<EnrollmentDto>> findAllByStudent(){
        return ResponseEntity.ok(this.enrollmentService.findAllByStudent());
    }


   // @Operation(description = "Update qualification course")
    @PostMapping("/students/{idEnrollment}")
  //  @SecurityRequirement(name = "Bearer Authentication")
   // @PreAuthorize("hasRole('ROLE_STUDENT')")
    public ResponseEntity<?> findAllByStudent(@PathVariable Long idEnrollment,@RequestParam Integer value){

        //MODIFICAR DESPUES DE LA ENTREGA, no debe devolver una entidad sino un DTO.
        return ResponseEntity.ok( enrollmentService.qualificationCourse(idEnrollment,value));
    }


}

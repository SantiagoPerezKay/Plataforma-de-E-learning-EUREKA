package com.s1411mjava.edtech.controller;

import com.s1411mjava.edtech.dtos.ProgressDto;
import com.s1411mjava.edtech.service.ProgressService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/progresses")
@Tag(name = "Progresses")
public class ProgressController {
    private final ProgressService progressService;

    @Operation(description = "Mark a progress in completed. Role: STUDENT.")
    @PatchMapping("/{progressId}")
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_STUDENT')")
    public ResponseEntity<ProgressDto> check(@PathVariable Long progressId){
        return ResponseEntity.ok(this.progressService.check(progressId));
    }
}

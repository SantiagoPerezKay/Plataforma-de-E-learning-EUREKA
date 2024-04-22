package com.s1411mjava.edtech.controller;

import com.s1411mjava.edtech.dtos.FileDto;
import com.s1411mjava.edtech.service.CloudinaryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/files")
@Tag(name = "Files")
public class FileController {
    private final CloudinaryService cloudinaryService;

    @Operation(summary = "Upload file", description = "Max file size: 10MB")
    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    @SecurityRequirement(name = "Bearer Authentication")
    public ResponseEntity<FileDto> upload(@RequestPart MultipartFile file) throws IOException {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.cloudinaryService.save(file));
    }
}


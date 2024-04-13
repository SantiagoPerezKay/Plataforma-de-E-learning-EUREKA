package com.s1411mjava.edtech.controller;


import com.s1411mjava.edtech.dtos.CatalogDto;
import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.service.impl.CatalogServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Course catalog")
@RestController
@RequiredArgsConstructor
@RequestMapping("/catalog")
public class CatalogController {
    private final CatalogServiceImpl catalogServiceImpl;
    @GetMapping

    public ResponseEntity<List<CatalogDto>> findAllCatalog(){
        return ResponseEntity.ok(catalogServiceImpl.findAllCatalog());

    }
}

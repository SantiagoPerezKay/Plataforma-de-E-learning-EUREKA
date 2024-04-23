package com.s1411mjava.edtech.controller;


import com.s1411mjava.edtech.dtos.CatalogDto;
import com.s1411mjava.edtech.dtos.CategoryDto;
import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.entity.Category;
import com.s1411mjava.edtech.repository.CategoryRepository;
import com.s1411mjava.edtech.service.impl.CatalogServiceImpl;
import com.s1411mjava.edtech.service.impl.CategoryServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
public class CatalogController {
    private final CatalogServiceImpl catalogServiceImpl;
    private final CategoryServiceImpl categoryService;
    @GetMapping

    public ResponseEntity<List<CatalogDto>> findAllCatalog(){

        long startTime = System.currentTimeMillis();

        List<CatalogDto> catalogDtoList = catalogServiceImpl.findAllCatalog();


        long endTime = System.currentTimeMillis();
        long totalTime = endTime - startTime;
        log.info("Total time taken to execute findAllCatalog: " + totalTime / 1000 + " seconds");
        return ResponseEntity.ok(catalogDtoList);

    }
    @GetMapping("/categories")
    public ResponseEntity<List<CategoryDto>> findAllCategories() {
        List<CategoryDto> categoryDtos = categoryService.findAllCategories();
        return ResponseEntity.ok(categoryDtos);
    }
}

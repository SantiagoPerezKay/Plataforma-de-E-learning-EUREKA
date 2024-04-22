package com.s1411mjava.edtech.service.impl;

import com.s1411mjava.edtech.dtos.CategoryDto;
import com.s1411mjava.edtech.mapper.CategoryMapper;
import com.s1411mjava.edtech.repository.CategoryRepository;
import com.s1411mjava.edtech.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public List<CategoryDto> findAllCategories(){
        return categoryRepository.findAll().stream().map(categoryMapper::toDto).toList();
    }
}

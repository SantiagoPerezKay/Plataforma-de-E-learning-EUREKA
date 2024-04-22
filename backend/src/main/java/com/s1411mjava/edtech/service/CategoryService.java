package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.CategoryDto;

import java.util.List;

public interface CategoryService {
    List<CategoryDto> findAllCategories();
}

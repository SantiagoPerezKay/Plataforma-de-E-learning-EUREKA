package com.s1411mjava.edtech.service;

import com.s1411mjava.edtech.dtos.CatalogDto;
import com.s1411mjava.edtech.dtos.EnrollmentDto;

import java.util.List;

public interface CatalogService {
    List<CatalogDto> findAllCatalog();
}


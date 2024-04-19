package com.s1411mjava.edtech.mapper;

import com.s1411mjava.edtech.dtos.CreateCourseModuleDTO;
import com.s1411mjava.edtech.entity.Module;
import org.mapstruct.Mapper;
import org.springframework.validation.annotation.Validated;

@Mapper(componentModel = "spring")
public interface ModuleMapper {

    Module toEntity(CreateCourseModuleDTO createCourseModuleDTO);
}

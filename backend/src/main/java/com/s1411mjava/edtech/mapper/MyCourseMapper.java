package com.s1411mjava.edtech.mapper;

import com.s1411mjava.edtech.dtos.MyCourseDto;
import com.s1411mjava.edtech.entity.Module;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface MyCourseMapper {
    Module toEntity(MyCourseDto myCourseDto);

    @AfterMapping
    default void linkContents(@MappingTarget Module module) {
        module.getContents().forEach(content -> content.setModule(module));
    }

    MyCourseDto toDto(Module module);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Module partialUpdate(MyCourseDto myCourseDto, @MappingTarget Module module);
}
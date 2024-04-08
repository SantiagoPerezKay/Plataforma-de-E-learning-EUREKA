package com.s1411mjava.edtech.mapper;

import com.s1411mjava.edtech.dtos.CatalogDto;
import com.s1411mjava.edtech.entity.Course;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface CatalogMapper {
    Course toEntity(CatalogDto catalogDto);
    CatalogDto toDto(Course course);
}

package com.s1411mjava.edtech.mapper;

import com.s1411mjava.edtech.dtos.EnrollmentDto;
import com.s1411mjava.edtech.entity.Enrollment;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE,
        componentModel = MappingConstants.ComponentModel.SPRING,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        uses = {CatalogMapper.class})
public interface EnrollmentMapper {
    Enrollment toEntity(EnrollmentDto enrollmentDto);
    @Mapping(target = "creationDate", dateFormat = "dd-MM-yyyy")
    EnrollmentDto toDto(Enrollment enrollment);
    List<EnrollmentDto> toDto(List<Enrollment> enrollments);
}

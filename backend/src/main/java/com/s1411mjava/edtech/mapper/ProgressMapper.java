package com.s1411mjava.edtech.mapper;

import com.s1411mjava.edtech.dtos.ProgressDto;
import com.s1411mjava.edtech.entity.Progress;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface ProgressMapper {
    Progress toEntity(ProgressDto progressDto);
    ProgressDto toDto(Progress progress);
}

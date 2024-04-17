package com.s1411mjava.edtech.mapper;

import com.s1411mjava.edtech.dtos.CourseModuleDto;
import com.s1411mjava.edtech.dtos.CreateCourseDTO;
import com.s1411mjava.edtech.dtos.CreatedCourseDTO;
import com.s1411mjava.edtech.entity.Course;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface CourseModuleMapper {
    @Mapping(target = "modules.contents.progress", ignore = true)
    Course toEntity(CourseModuleDto courseModuleDto);

    @AfterMapping
    default void linkModules(@MappingTarget Course course) {
        course.getModules().forEach(module -> module.setCourse(course));
    }

    @AfterMapping
    default void linkContents(@MappingTarget Course course) {
        course.getModules().forEach(module -> module.getContents().forEach(content -> content.setModule(module)));
    }

    CourseModuleDto toDto(Course course);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Course partialUpdate(CourseModuleDto courseModuleDto, @MappingTarget Course course);

    Course toEntity(CreateCourseDTO createCourseDTO);

    CreatedCourseDTO toDTO(Course course);

}
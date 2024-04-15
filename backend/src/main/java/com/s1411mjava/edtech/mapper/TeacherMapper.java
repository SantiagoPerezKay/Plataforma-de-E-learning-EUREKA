package com.s1411mjava.edtech.mapper;
import com.s1411mjava.edtech.dtos.TeacherDto;
import com.s1411mjava.edtech.entity.Teacher;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface TeacherMapper {
    Teacher teacherDtoToTeacher(TeacherDto teacherDto);

    TeacherDto teacherToTeacherDto(Teacher teacher);

}

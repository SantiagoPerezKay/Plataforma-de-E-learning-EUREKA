package com.s1411mjava.edtech.service.impl;
import com.s1411mjava.edtech.dtos.TeacherDto;
import com.s1411mjava.edtech.entity.Teacher;
import com.s1411mjava.edtech.repository.TeacherRepository;
import com.s1411mjava.edtech.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherServiceImpl(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @Override
    public TeacherDto createTeacher(TeacherDto teacherDto) {
        Teacher teacher = new Teacher();
        teacher.setExperience(teacherDto.getExperience());
        teacher.setCredentials(teacherDto.getCredentials());
        teacher.setInfo(teacherDto.getInfo());
        teacher.setUser_id(teacherDto.getUser_id());

        Teacher savedTeacher = teacherRepository.save(teacher);

        return convertToDto(savedTeacher);
    }

    private TeacherDto convertToDto(Teacher teacher) {
        TeacherDto teacherDto = new TeacherDto();
        teacherDto.setId(teacher.getId());
        teacherDto.setExperience(teacher.getExperience());
        teacherDto.setCredentials(teacher.getCredentials());
        teacherDto.setInfo(teacher.getInfo());
        teacherDto.setUser_id(teacher.getUser_id());

        return teacherDto;
    }
}

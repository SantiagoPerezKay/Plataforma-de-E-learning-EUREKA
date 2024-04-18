package com.s1411mjava.edtech.service.impl;
import com.s1411mjava.edtech.dtos.*;
import com.s1411mjava.edtech.entity.*;
import com.s1411mjava.edtech.entity.Module;
import com.s1411mjava.edtech.exception.ResourceNotFoundException;
import com.s1411mjava.edtech.mapper.CatalogMapper;
import com.s1411mjava.edtech.mapper.CourseModuleMapper;
import com.s1411mjava.edtech.repository.*;
import com.s1411mjava.edtech.service.TeacherService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;
    private final CategoryRepository categoryRepository;
    private final CourseRepository courseRepository;
    private final ModuleRepository moduleRepository;
    private final CatalogMapper catalogMapper;
    private final UserRepository userRepository;

    private final CourseModuleMapper courseMapper;

    @Override
    public TeacherOutDto createTeacher(TeacherInDto teacherInDto) {


        Teacher teacher = new Teacher();
        teacher.setExperience(teacherInDto.getExperience());
        teacher.setCredentials(teacherInDto.getCredentials());
        teacher.setLinkedin(teacherInDto.getLinkedin());
        teacher.setFile(teacherInDto.getFile());
        teacher.setUser(getCurrentUser());

        Teacher savedTeacher = teacherRepository.save(teacher);

        return convertToDto(savedTeacher);
    }


    @Override
    public CreatedCourseDTO createCourse(CreateCourseDTO createCourseDTO) {

        Teacher teacher = getTeacherByUser(getCurrentUser());

        Category category = getCategoryById(createCourseDTO.getCategoryId());

        Course savedCourse = createCourseFromDTO(createCourseDTO, teacher, category);

        savedCourse.setModules(createModules(savedCourse, savedCourse.getModules()));

        savedCourse = courseRepository.save(savedCourse);

        return courseMapper.toDTO(savedCourse);
    }

    private Category getCategoryById(Long categoryId) {
        return categoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Categoría no encontrada"));
    }

    private List<Module> createModules(Course savedCourse, List<Module> modules) {
        modules.forEach(module -> module.setCourse(savedCourse));
        return moduleRepository.saveAll(modules);
    }

    private Teacher getTeacherByUser(User user) {
        return teacherRepository
                .findByUser(user)
                .orElseThrow(() -> new ResourceNotFoundException("Profesor no registrado"));
    }

    private Course createCourseFromDTO(CreateCourseDTO createCourseDTO, Teacher teacher, Category category) {
        Course course = courseMapper.toEntity(createCourseDTO);
        course.setTeacher(teacher);
        course.setCategory(category);
        return courseRepository.save(course);
    }

    private TeacherOutDto convertToDto(Teacher teacher) {
        TeacherOutDto teacherOutDto = new TeacherOutDto();
        teacherOutDto.setId(teacher.getId());
        teacherOutDto.setExperience(teacher.getExperience());
        teacherOutDto.setCredentials(teacher.getCredentials());
        teacherOutDto.setLinkedin(teacher.getLinkedin());
        teacherOutDto.setUser_id(teacher.getUser().getId());
        teacherOutDto.setFile(teacher.getFile());

        return teacherOutDto;
    }

    @Override
    public TeacherOutDto getProfileTeacher(Long id) {
        Optional<Teacher> teacher = teacherRepository.findById(id);
        if (teacher.isEmpty()) {
            throw new ResourceNotFoundException("Teacher Not Found Exception with id: " + id);
        }
        return convertToDto(teacher.get());
    }


    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CatalogDto> getCourses() {
        User currentUser = getCurrentUser();
        Teacher currentTeacher = getTeacherByUser(currentUser);
        Long teacherId = currentTeacher.getId();

        Optional<List<Course>> optionalCourses = Optional.ofNullable(courseRepository.findAllByTeacherId(teacherId));

        if (optionalCourses.isPresent()) {
            List<Course> courses = optionalCourses.get();
            if (courses.isEmpty()) {
                throw new ResourceNotFoundException("No courses found for teacher with ID: " + teacherId);
            }
            return courses.stream()
                    .map(catalogMapper::toDto)
                    .collect(Collectors.toList());
        } else {
            throw new ResourceNotFoundException("Courses not found for teacher with ID: " + teacherId);
        }
    }

    @Override
    public VerifiedDto verify() {
        User currentUser = getCurrentUser();
        Optional<Teacher> optionalTeacher = this.teacherRepository.findByUser(currentUser);

        VerifiedDto response = new VerifiedDto(false);

        if(optionalTeacher.isPresent()){
            response.setVerified(true);
        }

        return response;
    }

    @Override
    @Transactional
    public CreatedCourseDTO getCourseById(Long courseId) {

        Optional<Course> course = courseRepository.findById(courseId);

        if(course.isEmpty()){
            throw new ResourceNotFoundException("Curso no encontrado con ID: " + courseId);
        }

        Teacher teacher = getTeacherByUser(getCurrentUser());

        if(course.get().getTeacher() == null || !course.get().getTeacher().getId().equals(teacher.getId())){
            throw new ResourceNotFoundException("No se encuentra el curso con ID: " + courseId);
        }

        return courseMapper.toDTO(course.get());
    }
}

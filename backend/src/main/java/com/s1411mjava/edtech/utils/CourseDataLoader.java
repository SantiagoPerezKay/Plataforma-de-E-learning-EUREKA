package com.s1411mjava.edtech.utils;


import com.s1411mjava.edtech.entity.Category;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.repository.CategoryRepository;
import com.s1411mjava.edtech.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;



@Component
@RequiredArgsConstructor
public class CourseDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(CourseDataLoader.class);
    private final CourseRepository repository;
    private final CategoryRepository categoryRepository;


    @Override
    public void run(String... args) throws Exception {
        logger.info("Cargando datos...");
        List<Course> courses = new ArrayList<>();

        // Categoría NEGOCIOS
        Category category = categoryRepository.findById(1L).orElse(null).getCategory();
        courses.add(new Course(1L,"Introducción a la Gestión Empresarial", "Este curso proporciona una visión general de los conceptos básicos de la gestión empresarial, incluyendo estrategia, liderazgo, gestión de recursos humanos, marketing y finanzas.", "url_de_la_imagen", null, category));
        courses.add(new Course(2L,"Fundamentos de Marketing Digital", "Aprenderás sobre las estrategias y herramientas fundamentales del marketing digital, incluyendo SEO, SEM, redes sociales, análisis de datos y publicidad en línea.", "url_de_la_imagen", 4F, category));
        courses.add(new Course(3L,"Finanzas para no financieros", "Este curso te enseñará los principios básicos de las finanzas empresariales, incluyendo cómo leer estados financieros, presupuestos, análisis de costos y toma de decisiones financieras.", "url_de_la_imagen", 5F, category));
        courses.add(new Course(4L,"Emprendimiento y Desarrollo de Negocios", "Explora los fundamentos del emprendimiento, desde la concepción de una idea hasta la creación y gestión de un negocio exitoso, incluyendo aspectos legales, financieros y de marketing.", "url_de_la_imagen", 3F, category));
        courses.add(new Course(5L,"Gestión de Proyectos", "Aprende sobre las metodologías y herramientas para planificar, ejecutar y controlar proyectos de manera efectiva, incluyendo la gestión de riesgos, la asignación de recursos y la comunicación con los interesados.", "url_de_la_imagen", 5F, category));

        repository.saveAll(courses);

        logger.info("Datos cargados exitosamente.");
    }



    }


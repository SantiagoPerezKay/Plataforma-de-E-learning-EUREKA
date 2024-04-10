package com.s1411mjava.edtech.utils;


import com.s1411mjava.edtech.entity.Category;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.repository.CategoryRepository;
import com.s1411mjava.edtech.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;



@Component
@RequiredArgsConstructor
@Order(2)
public class CourseDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(CourseDataLoader.class);
    private final CourseRepository repository;
    private final CategoryRepository categoryRepository;


    @Override
    public void run(String... args) throws Exception {
        logger.info("Cargando datos...");
        List<Course> courses = new ArrayList<>();

        // Categoría NEGOCIOS
        Category business = categoryRepository.findById(1L).orElse(null);
        courses.add(new Course(1L, "Introducción a la Gestión Empresarial", "Este curso proporciona una visión general de los conceptos básicos de la gestión empresarial, incluyendo estrategia, liderazgo, gestión de recursos humanos, marketing y finanzas."
                , "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5lZ29jaW9zfGVufDB8fDB8fHww", null, business, null));
        courses.add(new Course(2L, "Fundamentos de Marketing Digital", "Aprenderás sobre las estrategias y herramientas fundamentales del marketing digital, incluyendo SEO, SEM, redes sociales, análisis de datos y publicidad en línea."
                , "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5lZ29jaW9zfGVufDB8fDB8fHww", 4F, business,null));
        courses.add(new Course(3L, "Finanzas para no financieros", "Este curso te enseñará los principios básicos de las finanzas empresariales, incluyendo cómo leer estados financieros, presupuestos, análisis de costos y toma de decisiones financieras."
                , "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5lZ29jaW9zfGVufDB8fDB8fHww", 5F, business,null));
        courses.add(new Course(4L, "Emprendimiento y Desarrollo de Negocios", "Explora los fundamentos del emprendimiento, desde la concepción de una idea hasta la creación y gestión de un negocio exitoso, incluyendo aspectos legales, financieros y de marketing."
                , "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5lZ29jaW9zfGVufDB8fDB8fHww", 3F, business,null));
        courses.add(new Course(5L, "Gestión de Proyectos", "Aprende sobre las metodologías y herramientas para planificar, ejecutar y controlar proyectos de manera efectiva, incluyendo la gestión de riesgos, la asignación de recursos y la comunicación con los interesados."
                , "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5lZ29jaW9zfGVufDB8fDB8fHww", 5F, business,null));

//        Categoria FINANZAS
        Category finance = categoryRepository.findById(2L).orElse(null);
        courses.add(new Course(6L, "Fundamentos de Finanzas Corporativas",
                "Este curso cubre los principios básicos de las finanzas corporativas, incluyendo la valoración de activos, la estructura de capital, el riesgo financiero y la toma de decisiones de inversión.",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", null, finance,null));

        courses.add(new Course(7L, "Análisis Financiero",
                "Aprende a interpretar estados financieros, realizar análisis de ratios financieros y evaluar la salud financiera de una empresa.",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", null, finance,null));

        courses.add(new Course(8L, "Mercados Financieros y Productos",
                "Explora los diferentes tipos de instrumentos financieros, como acciones, bonos, derivados y fondos de inversión, así como los mercados en los que se negocian.",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", null, finance,null));

        courses.add(new Course(9L, "Planificación Financiera Personal",
                "Este curso se enfoca en la gestión de las finanzas personales, incluyendo la creación de presupuestos, el ahorro, la inversión, la planificación de la jubilación y la gestión del riesgo.",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", null, finance,null));

        courses.add(new Course(10L, "Gestión de Riesgos Financieros",
                "Aprende sobre las diferentes formas de riesgo financiero, incluyendo riesgo de mercado, riesgo de crédito y riesgo operativo, así como las estrategias para mitigar estos riesgos.",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", null, finance,null));

//        Categoria IT
        Category it = categoryRepository.findById(3L).orElse(null);
        courses.add(new Course(11L, "Introducción a la Programación", "Este curso proporciona una visión general de los conceptos básicos de la programación, incluyendo algoritmos, estructuras de datos y lógica de programación. Es ideal para principiantes que deseen aprender a programar."
                , "https://images.unsplash.com/photo-1573165706433-60f05c787234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fElUfGVufDB8fDB8fHww", null, it,null));

        courses.add(new Course(12L, "Fundamentos de Redes Informáticas", "Aprende sobre los principios fundamentales de las redes informáticas, incluyendo protocolos, topologías, seguridad de redes y administración de redes."
                , "https://images.unsplash.com/photo-1573165706433-60f05c787234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fElUfGVufDB8fDB8fHww", null, it,null));

        courses.add(new Course(13L, "Desarrollo Web", "Explora las tecnologías y herramientas utilizadas en el desarrollo web, incluyendo HTML, CSS, JavaScript, frameworks de desarrollo y diseño responsivo."
                , "https://images.unsplash.com/photo-1573165706433-60f05c787234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fElUfGVufDB8fDB8fHww", null, it,null));

        courses.add(new Course(14L, "Introducción a la Ciberseguridad", "Este curso te enseñará los conceptos básicos de la ciberseguridad, incluyendo amenazas comunes, técnicas de protección, criptografía y cumplimiento de normativas de seguridad."
                , "https://images.unsplash.com/photo-1573165706433-60f05c787234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fElUfGVufDB8fDB8fHww", null, it,null));

        courses.add(new Course(15L, "Introducción a la Ciencia de Datos", "Aprende los fundamentos de la ciencia de datos, incluyendo análisis de datos, visualización, modelado predictivo y herramientas como Python y R."
                , "https://images.unsplash.com/photo-1573165706433-60f05c787234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fElUfGVufDB8fDB8fHww", null, it,null));

//        Categoria MARKETING
        Category marketing = categoryRepository.findById(4L).orElse(null);
        courses.add(new Course(16L, "Introducción al Marketing Digital", "Este curso proporciona una visión general de las estrategias y tácticas utilizadas en el marketing digital, incluyendo SEO, SEM, marketing de contenidos, redes sociales y analítica web."
                , "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nfGVufDB8fDB8fHww", null, marketing,null));

        courses.add(new Course(17L, "Marketing de Contenidos", "Aprende a crear y distribuir contenido relevante y atractivo para atraer y retener a tu audiencia, incluyendo blogs, videos, infografías, y otros formatos de contenido."
                , "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nfGVufDB8fDB8fHww", null, marketing,null));

        courses.add(new Course(18L, "Email Marketing", "Explora las mejores prácticas para crear campañas de email marketing efectivas, incluyendo la segmentación de audiencias, diseño de emails, automatización y análisis de resultados."
                , "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nfGVufDB8fDB8fHww", null, marketing,null));

        courses.add(new Course(19L, "Marketing en Redes Sociales", "Este curso se centra en las estrategias y tácticas para promover marcas y productos en plataformas de redes sociales como Facebook, Instagram, Twitter y LinkedIn."
                , "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nfGVufDB8fDB8fHww", null, marketing,null));

        courses.add(new Course(20L, "Marketing de Influencers", "Aprende cómo colaborar con influencers para promocionar productos y servicios, incluyendo la identificación de influencers relevantes, la negociación de acuerdos y la medición del ROI."
                , "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nfGVufDB8fDB8fHww", null, marketing,null));

//Categoria DISEÑO
        Category design = categoryRepository.findById(5L).orElse(null);
        courses.add(new Course(21L, "Fundamentos del Diseño Gráfico", "Este curso cubre los principios básicos del diseño gráfico, incluyendo teoría del color, tipografía, composición, y uso de software de diseño como Adobe Illustrator y Photoshop."
                , "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2UlQzMlQjFvfGVufDB8fDB8fHww", null, design,null));
        courses.add(new Course(22L, "Diseño de Experiencia de Usuario (UX)", "Aprende sobre los principios de diseño centrado en el usuario, incluyendo investigación de usuarios, arquitectura de la información, prototipado y pruebas de usabilidad."
                , "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2UlQzMlQjFvfGVufDB8fDB8fHww", null, design,null));
        courses.add(new Course(23L, "Diseño de Interfaz de Usuario (UI)", "Explora los fundamentos del diseño de interfaces de usuario para aplicaciones y sitios web, incluyendo diseño visual, interacción usuario-interfaz, y diseño responsivo."
                , "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2UlQzMlQjFvfGVufDB8fDB8fHww", null, design,null));
        courses.add(new Course(24L, "Diseño de Productos", "Este curso se centra en el proceso de diseño de productos físicos y digitales, desde la conceptualización hasta la fabricación, pasando por la iteración y la optimización."
                , "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2UlQzMlQjFvfGVufDB8fDB8fHww", null, design,null));
        courses.add(new Course(25L, "Diseño de Branding y Identidad Corporativa", "Aprende a crear y gestionar la identidad visual de una marca, incluyendo diseño de logotipos, paletas de colores, y elementos de marca coherentes."
                , "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2UlQzMlQjFvfGVufDB8fDB8fHww", null, design,null));

        repository.saveAll(courses);

        logger.info("Datos cargados exitosamente.");
    }


}


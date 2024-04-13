package com.s1411mjava.edtech.utils;

import com.s1411mjava.edtech.entity.Content;
import com.s1411mjava.edtech.entity.Course;
import com.s1411mjava.edtech.entity.Module;
import com.s1411mjava.edtech.repository.ContentRepository;
import com.s1411mjava.edtech.repository.CourseRepository;
import com.s1411mjava.edtech.repository.ModuleRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Order(3)
@RequiredArgsConstructor
public class ContentDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(ContentDataLoader.class);
    private final CourseRepository courseRepository;
    private final ModuleRepository moduleRepository;
    private final ContentRepository contentRepository;

    @Override
    public void run(String... args) throws Exception {
        loadContents();
    }


    private void loadContents(){

        logger.info("Cargando contenidos...");

        loadFirstCourseContent();

        loadSecondCourseContent();

        loadThirdCourseContent();

    }

    private void loadFirstCourseContent(){

        // Gestión Empresarial
        List<Content> contentsList = new ArrayList<>();
        // Contenido módulo 1
        Content content1 = new Content(
                1L,
                "Fundamentos de la gestión empresarial",
                0,
                "https://youtu.be/Ce54dLhnGfo?si=2FQqrTrX47lbMbZZ",
                "https://asset.cloudinary.com/dunjzopgf/444067784a0da2bf7f12b86697c17952",
                "¿Qué es la Gestión Empresarial? La Gestión Empresarial es el proceso estratégico, administrativo y de actividades para la empresa que buscan mejorar la productividad y la competitividad de esta.\n" +
                        "Funciones de la Gestión Empresarial:\n" +
                        "-Planificación\n" +
                        "-Organización\n" +
                        "-Control\n" +
                        "-Dirección",
                null,
                null
        );
        contentsList.add(content1);

        Content content2 = new Content(
                2L,
                "¿Qué es la gestión empresarial?",
                1,
                "https://youtu.be/Ce54dLhnGfo?si=3s5Db3qTAxfwvpv4",
                null,
                "Funciones de la Gestión Empresarial:\n" +
                        "-Planificación\n" +
                        "-Organización\n" +
                        "-Control\n" +
                        "-Dirección",
                null,
                null
        );
        contentsList.add(content2);


        // Contenido módulo 2
        Content content3 = new Content(
                3L,
                "Planeación: operativa, estrategica y sistemática",
                0,
                "https://youtu.be/ogxtcO_YIcg?si=dLjGr9iVo_L4GK_E",
                "https://asset.cloudinary.com/dunjzopgf/c596ddcf279a7c8201dd71899e0f9523",
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content3);

        Content content4 = new Content(
                4L,
                "Planificación: Tipos y procesos",
                1,
                "https://youtu.be/Tku8BPmM8kQ?si=wUxdKeU0Bh1XUXWf",
                "https://asset.cloudinary.com/dunjzopgf/fad3ae31493d0c92df35d9553e38f8e4",
                "Principios de la planeación",
                null,
                null
        );
        contentsList.add(content4);

        Content content5 = new Content(
                5L,
                "Técnicas de planeación",
                2,
                "https://youtu.be/60LdUWxA6IU?si=JUqLlMVFQm9jsCs4",
                null,
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content5);

        // Organizacion

        Content content6 = new Content(
                6L,
                "Organización",
                0,
                "https://youtu.be/0Ju2kHtY4Xw?si=QT2tIn9-DHIh3izU",
                null,
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content6);

        List<Module> modules = new ArrayList<>();

        Course course = courseRepository.findById(1L).orElse(null);

        modules.add(new Module(
                1L,
                "Introducción",
                0,
                null,
                course
        ));

        modules.add(new Module(
                2L,
                "Planificación",
                1,
                null,
                course
        ));

        modules.add(new Module(
                3L,
                "Organización",
                2,
                null,
                course
        ));

        moduleRepository.saveAll(modules);

        for(Content content : List.of(content1, content2)){
            content.setModule(modules.get(0));
        }

        for(Content content : List.of(content3, content4, content5)){
            content.setModule(modules.get(1));
        }

        content6.setModule(modules.get(1));

        contentRepository.saveAll(contentsList);
    }

    private void loadSecondCourseContent() {

        List<Content> contentsList = new ArrayList<>();

        Content content1 = new Content(
                7L,
                "Introducción al Análisis Financiero",
                0,
                "https://youtu.be/sULvdEYCwH0?si=ruoBJwbdUnvPFyY4",
                null,
                "¿Qué es el análisis financiero? Importancia y objetivos.",
                null,
                null
        );
        contentsList.add(content1);

        Content content2 = new Content(
                8L,
                "ESTADO de Situación FINANCIERA",
                1,
                "https://youtu.be/xJJefqBoeCc?si=yhSDWzHAl9wZvua7",
                null,
                "Entendiendo el estado de situación financiera.",
                null,
                null
        );
        contentsList.add(content2);

        Content content3 = new Content(
                9L,
                "Balances: Cómo hacer un balance general en Excel",
                0,
                "https://youtu.be/ALaTzx9T8sU?si=9DegmofNwppf7cVA",
                null,
                "Aprende a elaborar un balance general utilizando Excel.",
                null,
                null
        );
        contentsList.add(content3);

        Content content4 = new Content(
                10L,
                "Estado de Resultado: Cómo hacer estado de resultado integral",
                0,
                "https://youtu.be/hfxM2OBxItc?si=M6nTspiyOZl6-OHA",
                null,
                "Elaboración de un estado de resultado integral paso a paso.",
                null,
                null
        );
        contentsList.add(content4);

        Content content5 = new Content(
                11L,
                "Análisis vertical y horizontal de estado financiero",
                0,
                "https://youtu.be/Pftd-ZlGQws?si=iLXxJLXhOzkqKEle",
                null,
                "Cómo realizar un análisis vertical y horizontal de un estado financiero.",
                null,
                null
        );
        contentsList.add(content5);

        Content content6 = new Content(
                12L,
                "Análisis vertical y horizontal de estado de resultado",
                1,
                "https://youtu.be/TQd45PPJRYo?si=oOgC9o-w_ce_D6jE",
                null,
                "Aplicación de análisis vertical y horizontal en un estado de resultado.",
                null,
                null
        );
        contentsList.add(content6);

        List<Module> modules = new ArrayList<>();

        Course course = courseRepository.findById(2L).orElse(null);

        modules.add(new Module(
                4L,
                "Introducción",
                0,
                null,
                course
        ));

        modules.add(new Module(
                5L,
                "Balances",
                1,
                null,
                course
        ));

        modules.add(new Module(
                6L,
                "Estado de Resultado",
                2,
                null,
                course
        ));

        moduleRepository.saveAll(modules);

        for (Content content : List.of(content1, content2)) {
            content.setModule(modules.get(0));
        }

        for (Content content : List.of(content3)) {
            content.setModule(modules.get(1));
        }

        for (Content content : List.of(content4)) {
            content.setModule(modules.get(2));
        }

        for (Content content : List.of(content5, content6)) {
            content.setModule(modules.get(1));
        }

        contentRepository.saveAll(contentsList);
    }

    private void loadThirdCourseContent() {

        List<Content> contentsList = new ArrayList<>();

        // Introducción a HTML
        Content htmlIntroduction1 = new Content(
                13L,
                "Introduccion a HTML",
                0,
                "https://youtu.be/_MTZx8H-Fo4?si=6tTtEUxAFEQSIKkW",
                null,
                "Conceptos básicos y fundamentales de HTML.",
                null,
                null
        );
        contentsList.add(htmlIntroduction1);

        Content htmlIntroduction2 = new Content(
                14L,
                "Estructura básica",
                1,
                "https://youtu.be/uSu59Z-tN10?si=RT7ry2RzcbDBbfLS",
                null,
                "La estructura básica de un documento HTML.",
                null,
                null
        );
        contentsList.add(htmlIntroduction2);

        Content htmlIntroduction3 = new Content(
                15L,
                "Etiqueta",
                2,
                "https://youtu.be/UFUNOEJEo48?si=E9vnwHYwBgC1-Cx0",
                null,
                "Uso y aplicación de etiquetas HTML.",
                null,
                null
        );
        contentsList.add(htmlIntroduction3);

        Content htmlIntroduction4 = new Content(
                16L,
                "Listas",
                3,
                "https://youtu.be/7Cv8TGffr1Q?si=HtMeKIf9WPLnAmk5",
                null,
                "Cómo crear listas en HTML.",
                null,
                null
        );
        contentsList.add(htmlIntroduction4);

        Content htmlIntroduction5 = new Content(
                17L,
                "Imágenes",
                4,
                "https://youtu.be/OmC9FM71QHw?si=hUQnrPjUDuPUDk8z",
                null,
                "Incorporación de imágenes en documentos HTML.",
                null,
                null
        );
        contentsList.add(htmlIntroduction5);

        Content htmlIntroduction6 = new Content(
                18L,
                "Enlaces",
                5,
                "https://youtu.be/cRyI7xNVDGU?si=N2Qdq6wCUJ1FmmKe",
                null,
                "Cómo crear enlaces en HTML.",
                null,
                null
        );
        contentsList.add(htmlIntroduction6);

        Content htmlIntroduction7 = new Content(
                19L,
                "Formularios",
                6,
                "https://youtu.be/zgVJkC2r0eo?si=X-gkaeEFyfOaG2vo",
                null,
                "Uso de formularios en HTML.",
                null,
                null
        );
        contentsList.add(htmlIntroduction7);

        // Introducción a CSS
        Content cssIntroduction1 = new Content(
                20L,
                "Introducción a CSS",
                0,
                "https://youtu.be/2-UCIaiQydY?si=rOyeh5y3LGPW1xaJ",
                null,
                "Conceptos básicos y fundamentales de CSS.",
                null,
                null
        );
        contentsList.add(cssIntroduction1);

        Content cssIntroduction2 = new Content(
                21L,
                "Añadir el CSS al HTML",
                1,
                "https://youtu.be/oGpZKwUTX04?si=3b5n3bYd8vMq83u5",
                null,
                "Cómo integrar CSS en documentos HTML.",
                null,
                null
        );
        contentsList.add(cssIntroduction2);

        Content cssIntroduction3 = new Content(
                22L,
                "Selectores y colores",
                2,
                "https://youtu.be/9W7gKGezrME?si=9Li6wGhpqEz0dHXJ",
                null,
                "Uso de selectores y definición de colores en CSS.",
                null,
                null
        );
        contentsList.add(cssIntroduction3);

        Content cssIntroduction4 = new Content(
                23L,
                "Margin, padding y border",
                3,
                "https://youtu.be/UCc0bJfqsmk?si=c3O9oMXOpmPzkA2D",
                null,
                "Cómo aplicar margen, relleno y bordes en CSS.",
                null,
                null
        );
        contentsList.add(cssIntroduction4);

        // Introducción a JavaScript
        Content jsIntroduction1 = new Content(
                24L,
                "Introducción a JavaScript",
                0,
                "https://youtu.be/Ifvdh9wK_rI?si=jaSimXUUAT2oSIWw",
                null,
                "Conceptos básicos y fundamentales de JavaScript.",
                null,
                null
        );
        contentsList.add(jsIntroduction1);

        Content jsIntroduction2 = new Content(
                25L,
                "Añadir JavaScript al HTML",
                1,
                "https://youtu.be/r7599yaroiA?si=PpMunqs8PgyEPmDf",
                null,
                "Cómo incluir JavaScript en documentos HTML.",
                null,
                null
        );
        contentsList.add(jsIntroduction2);

        Content jsIntroduction3 = new Content(
                26L,
                "Variables",
                2,
                "https://youtu.be/l1XhPQXV26I?si=1Kc0ucso4KLkDzhY",
                null,
                "Declaración y uso de variables en JavaScript.",
                null,
                null
        );
        contentsList.add(jsIntroduction3);

        Content jsIntroduction4 = new Content(
                27L,
                "Condicionales",
                3,
                "https://youtu.be/QGm-Ww4e-Vk?si=E3J_4zn2HO3b1Nb7",
                null,
                "Uso de estructuras condicionales en JavaScript.",
                null,
                null
        );
        contentsList.add(jsIntroduction4);

        Content jsIntroduction5 = new Content(
                28L,
                "Bucles",
                4,
                "https://youtu.be/yl80Tx3NDnc?si=jYZPkBg7UjvG1SQ_",
                null,
                "Cómo utilizar bucles en JavaScript.",
                null,
                null
        );
        contentsList.add(jsIntroduction5);

        Content jsIntroduction6 = new Content(
                29L,
                "Funciones",
                5,
                "https://youtu.be/gqmzGRkT70c?si=kQR9U2t_WSUj3m27",
                null,
                "Definición y uso de funciones en JavaScript.",
                null,
                null
        );
        contentsList.add(jsIntroduction6);

        Content jsIntroduction7 = new Content(
                30L,
                "Arreglos",
                6,
                "https://youtu.be/eODN1w-SB30?si=sd9BPaT9Uxh8vhMT",
                null,
                "Manejo de arreglos en JavaScript.",
                null,
                null
        );
        contentsList.add(jsIntroduction7);

        List<Module> modules = new ArrayList<>();

        Course course = courseRepository.findById(3L).orElse(null);

        modules.add(new Module(
                7L,
                "Introducción a HTML",
                0,
                null,
                course
        ));

        modules.add(new Module(
                8L,
                "Introducción a CSS",
                1,
                null,
                course
        ));

        modules.add(new Module(
                9L,
                "Introducción a JavaScript",
                2,
                null,
                course
        ));

        moduleRepository.saveAll(modules);

        for (Content content : List.of(htmlIntroduction1, htmlIntroduction2, htmlIntroduction3, htmlIntroduction4, htmlIntroduction5, htmlIntroduction6, htmlIntroduction7)) {
            content.setModule(modules.get(0));
        }

        for (Content content : List.of(cssIntroduction1, cssIntroduction2, cssIntroduction3, cssIntroduction4)) {
            content.setModule(modules.get(1));
        }

        for (Content content : List.of(jsIntroduction1, jsIntroduction2, jsIntroduction3, jsIntroduction4, jsIntroduction5, jsIntroduction6, jsIntroduction7)) {
            content.setModule(modules.get(2));
        }

        contentRepository.saveAll(contentsList);
    }


}

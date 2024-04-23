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
                "https://www.youtube.com/embed/Ce54dLhnGfo?si=NKTzU-0mAtDETeF6",
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
                "https://www.youtube.com/embed/Ce54dLhnGfo?si=7My803HR0EPf1J2a",
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
                "https://www.youtube.com/embed/ogxtcO_YIcg?si=_EPqXrpvvSpEGxof",
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
                "https://www.youtube.com/embed/Tku8BPmM8kQ?si=cNUrzHM2oyuMkjtR",
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
                "https://www.youtube.com/embed/60LdUWxA6IU?si=qXa5yu-JqUWmQ3gS",
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
                "https://www.youtube.com/embed/0Ju2kHtY4Xw?si=s70GNZ1F0C8_TxVU",
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
                "https://www.youtube.com/embed/sULvdEYCwH0?si=-2z0GiIJ9Q403VtP",
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
                "https://www.youtube.com/embed/xJJefqBoeCc?si=SL7HVK3U0yFFAF1k",
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
                "https://www.youtube.com/embed/ALaTzx9T8sU?si=fjG0etqJAS8k9nqx",
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
                "https://www.youtube.com/embed/hfxM2OBxItc?si=nRejUmTozJbRyQql",
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
                "https://www.youtube.com/embed/Pftd-ZlGQws?si=jjchibGiT9xny28-",
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
                "https://www.youtube.com/embed/TQd45PPJRYo?si=j3Y7mkbpnDeLnSwp",
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
                "https://www.youtube.com/embed/_MTZx8H-Fo4?si=MvFe3eeeoEWxUS85",
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
                "https://www.youtube.com/embed/uSu59Z-tN10?si=63qJdGCHVk0JiNoj",
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
                "https://www.youtube.com/embed/UFUNOEJEo48?si=aCbNrIDvIUQEb-4l",
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
                "https://www.youtube.com/embed/7Cv8TGffr1Q?si=waXxpuTJQ37tRkAW",
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
                "https://www.youtube.com/embed/OmC9FM71QHw?si=TXXC1C_gSjUhu-zK",
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
                "https://www.youtube.com/embed/cRyI7xNVDGU?si=H0rmI5BiYwipLRkW",
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
                "https://www.youtube.com/embed/zgVJkC2r0eo?si=hUR6s5UNC2PBsOXe",
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
                "https://www.youtube.com/embed/2-UCIaiQydY?si=2ucbyYBiCd_3qjbs",
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
                "https://www.youtube.com/embed/oGpZKwUTX04?si=5WQoZcHKuTo3uia5",
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
                "https://www.youtube.com/embed/9W7gKGezrME?si=RSOON1GUe6ZROU47",
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
                "https://www.youtube.com/embed/UCc0bJfqsmk?si=rMplkFpeQ-VqR6q6",
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
                "https://www.youtube.com/embed/Ifvdh9wK_rI?si=vJAbQvh6jZBeOE22",
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
                "https://www.youtube.com/embed/r7599yaroiA?si=lMWvDrRRumNXXyjq",
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
                "https://www.youtube.com/embed/l1XhPQXV26I?si=pHTpLYjyeRZonEgJ",
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
                "https://www.youtube.com/embed/QGm-Ww4e-Vk?si=Sydy5umq9-irXIDD",
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
                "https://www.youtube.com/embed/yl80Tx3NDnc?si=zg0E2v1Qc2bXFsJ-",
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
                "https://www.youtube.com/embed/gqmzGRkT70c?si=ET9xgIQrswpegiVo",
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
                "https://www.youtube.com/embed/eODN1w-SB30?si=NyEwbRhQaC85-u0O",
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

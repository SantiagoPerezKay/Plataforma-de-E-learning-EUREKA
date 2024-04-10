package com.s1411mjava.edtech.utils;

import com.s1411mjava.edtech.entity.Content;
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

        List<Content> contentsList = new ArrayList<>();

        List<Module> modules = new ArrayList<>();

        Content content1 = new Content(
                1L,
                "Introducción a la gestión empresarial",
                0,
                "https://asset.cloudinary.com/dunjzopgf/444067784a0da2bf7f12b86697c17952",
                "application/pdf",
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content1);

        Content content2 = new Content(
                2L,
                "Fundamentos del marketing digital",
                0,
                "https://asset.cloudinary.com/dunjzopgf/8108826d5382d2bc93772116ae314095",
                "application/pdf",
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content2);

        Content content3 = new Content(
                3L,
                "Introducción al Análisis financiero",
                0,
                "https://asset.cloudinary.com/dunjzopgf/c596ddcf279a7c8201dd71899e0f9523",
                "application/pdf",
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content3);

        Content content4 = new Content(
                4L,
                "Introducción al Desarrollo web",
                0,
                "https://asset.cloudinary.com/dunjzopgf/fad3ae31493d0c92df35d9553e38f8e4",
                "application/pdf",
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content4);

        Content content5 = new Content(
                5L,
                "Introducción a la Ciberseguridad",
                0,
                "https://asset.cloudinary.com/dunjzopgf/d8562dfdbf34a747450cf879f78e6b02",
                "application/pdf",
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content5);

        Content content6 = new Content(
                6L,
                "Introducción a la Diseño Gráfico",
                0,
                "https://asset.cloudinary.com/dunjzopgf/9d1a2c6e28c64b31a6070c324d2ebd3f",
                "application/pdf",
                "Todo lo que tienes que saber para arrancar el curso con todo.",
                null,
                null
        );
        contentsList.add(content6);


        modules.add(new Module(
                1L,
                "Introducción",
                0,
                List.of(content1),
                courseRepository.findById(1L).orElse(null)
        ));

        modules.add(new Module(
                2L,
                "Introducción",
                0,
                List.of(content2),
                courseRepository.findById(2L).orElse(null)
        ));

        modules.add(new Module(
                3L,
                "Introducción",
                0,
                List.of(content3),
                courseRepository.findById(7L).orElse(null)
        ));

        modules.add(new Module(
                4L,
                "Introducción",
                0,
                List.of(content4),
                courseRepository.findById(13L).orElse(null)
        ));

        modules.add(new Module(
                5L,
                "Introducción",
                0,
                List.of(content5),
                courseRepository.findById(14L).orElse(null)
        ));

        modules.add(new Module(
                6L,
                "Introducción",
                0,
                List.of(content6),
                courseRepository.findById(21L).orElse(null)
        ));

        List<Content> savedContents = contentRepository.saveAll(contentsList);

        for(int i = 0; i < savedContents.size(); i++){
            savedContents.get(i).setModule(modules.get(i));
        }

        moduleRepository.saveAll(modules);

        contentRepository.saveAll(savedContents);

    }
}

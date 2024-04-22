package com.s1411mjava.edtech;

import com.s1411mjava.edtech.entity.Category;
import com.s1411mjava.edtech.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;

import java.util.HashSet;

@SpringBootApplication
public class EdtechApplication {

	public static void main(String[] args) {
		SpringApplication.run(EdtechApplication.class, args);
	}

	@Bean
	@Order(1)
	public CommandLineRunner initData(final CategoryRepository categoryRepository){
		return (args) -> {

			Category category1 = new Category(1L,"Negocios", new HashSet<>());
			Category category2 = new Category(2L,"Finanzas", new HashSet<>());
			Category category3 = new Category(3L,"Tecnologia", new HashSet<>());
			Category category4 = new Category(4L,"Marketing", new HashSet<>());
			Category category5 = new Category(5L,"Diseño", new HashSet<>());

			categoryRepository.save(category1);
			categoryRepository.save(category2);
			categoryRepository.save(category3);
			categoryRepository.save(category4);
			categoryRepository.save(category5);

		};
	}

}

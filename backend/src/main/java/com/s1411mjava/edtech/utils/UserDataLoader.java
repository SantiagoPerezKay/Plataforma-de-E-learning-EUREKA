package com.s1411mjava.edtech.utils;

import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.enums.Role;
import com.s1411mjava.edtech.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
@Order(4)
@Slf4j
public class UserDataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        loadUsers();
        loadTeachers();
    }

    private void loadUsers(){

        log.info("Cargar usuarios...");

        User user1 = User.builder()
                .id(1L)
                .firstName("Juan")
                .lastName("Perz")
                .email("jperz@tmail.com")
                .password(passwordEncoder.encode("Chiave1234!"))
                .role(Role.STUDENT)
                .build();

        User user2 = User.builder()
                .id(2L)
                .firstName("Pablov")
                .lastName("Chernov")
                .email("plavchernv@tmail.com")
                .password(passwordEncoder.encode("allQuiz@+1"))
                .role(Role.STUDENT)
                .build();

        userRepository.saveAll(List.of(user1, user2));

    }

    private void loadTeachers(){

        log.info("Cargar usuarios...");

        User user1 = User.builder()
                .id(2L)
                .firstName("Pedro")
                .lastName("Cruz")
                .email("pedrocruz@tmail.com")
                .password(passwordEncoder.encode("**Kq!1234rs"))
                .role(Role.TEACHER)
                .build();

        User user2 = User.builder()
                .id(3L)
                .firstName("Maria")
                .lastName("Gonzalez")
                .email("maria@tmail.com")
                .password(passwordEncoder.encode("kq!1234rs"))
                .role(Role.TEACHER)
                .build();

        userRepository.saveAll(List.of(user1, user2));
    }
}

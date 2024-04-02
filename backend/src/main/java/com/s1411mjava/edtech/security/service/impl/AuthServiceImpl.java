package com.s1411mjava.edtech.security.service.impl;

import com.s1411mjava.edtech.dtos.RegistryDto;
import com.s1411mjava.edtech.dtos.UserDto;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.mapper.UserMapper;
import com.s1411mjava.edtech.repository.UserRepository;
import com.s1411mjava.edtech.security.config.SecurityConfig;
import com.s1411mjava.edtech.security.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;

    @Override
    public RegistryDto register(UserDto userDto) {
        User user = this.userMapper.toEntity(userDto);
        user.setPassword(SecurityConfig.passwordEncoder().encode(userDto.getPassword()));

        this.userRepository.save(user);

        return new RegistryDto(user.getEmail());
    }
}

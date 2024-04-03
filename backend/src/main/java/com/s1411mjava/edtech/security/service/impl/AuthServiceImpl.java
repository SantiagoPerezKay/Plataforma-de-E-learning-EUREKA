package com.s1411mjava.edtech.security.service.impl;

import com.s1411mjava.edtech.dtos.LoginDto;
import com.s1411mjava.edtech.dtos.RegistryDto;
import com.s1411mjava.edtech.dtos.TokenDto;
import com.s1411mjava.edtech.dtos.UserDto;
import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.enums.Role;
import com.s1411mjava.edtech.exception.RoleNameNotValidException;
import com.s1411mjava.edtech.mapper.UserMapper;
import com.s1411mjava.edtech.repository.UserRepository;
import com.s1411mjava.edtech.security.config.SecurityConfig;
import com.s1411mjava.edtech.security.service.AuthService;
import io.jsonwebtoken.security.Password;
import jakarta.validation.constraints.Email;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public RegistryDto register(UserDto userDto) {

        userDto.setRole(userDto.getRole().toUpperCase());

        if(!userDto.getRole().equals(Role.STUDENT.name()) && !userDto.getRole().equals(Role.TEACHER.name())){
            throw new RoleNameNotValidException();
        }

        User user = this.userMapper.toEntity(userDto);
        user.setPassword(SecurityConfig.passwordEncoder().encode(userDto.getPassword()));

        this.userRepository.save(user);

        Authentication auth = this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(), userDto.getPassword()));
        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String token = this.jwtService.generateToken(userDetails);

        return new RegistryDto(user.getEmail(), token);
    }

    @Override
    public TokenDto login(LoginDto loginDto) {
        if(!userRepository.existsByEmail(loginDto.getEmail())){
            throw new UsernameNotFoundException("UserNotFound");
        }
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
        UserDetails userDetails = (UserDetails) auth.getPrincipal();
        return new TokenDto(jwtService.generateToken(userDetails));
    }


}

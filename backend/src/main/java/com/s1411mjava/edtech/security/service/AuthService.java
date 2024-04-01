package com.s1411mjava.edtech.security.service;

import com.s1411mjava.edtech.dtos.RegistryDto;
import com.s1411mjava.edtech.dtos.UserDto;

public interface AuthService {
    RegistryDto register(UserDto userDto);
}

package com.s1411mjava.edtech.security.service.impl;

import com.s1411mjava.edtech.entity.User;
import com.s1411mjava.edtech.repository.UserRepository;
import com.s1411mjava.edtech.security.entity.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
      Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(email));
        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("User Not Found with email: " + email);
        }
        return new UserDetailsImpl(userOptional.get());
    }
}

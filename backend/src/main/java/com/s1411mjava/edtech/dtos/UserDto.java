package com.s1411mjava.edtech.dtos;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class UserDto {
    @NotBlank
    @NotNull
    @Size(min = 2, max = 30)
    @Pattern(regexp = "^[a-zA-Z]*$")
    private String firstName;

    @NotBlank
    @NotNull
    @Size(min = 2, max = 30)
    @Pattern(regexp = "^[a-zA-Z]*$")
    private String lastName;
    @Email
    private String email;

    @NotNull
    @NotBlank
    @Size(min = 8, max = 15)
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\[\\]!\"#$%&'()*+,\\-./:;<=>?@\\\\^_`{|}~*])\\S+$")
    private String password;

    @NotBlank
    @NotNull
    private String role;

}

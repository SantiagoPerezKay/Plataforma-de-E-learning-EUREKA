package com.s1411mjava.edtech.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Edtech API documentation",
                version = "0.0.1",
                description = "All the information you need to consume this API"
        ),
        servers = @Server(
                url = "/",
                description = "Default server URL"
        )
)
public class OpenAPIConfig {
}

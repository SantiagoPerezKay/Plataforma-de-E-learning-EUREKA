package com.s1411mjava.edtech.security.filter;

import com.s1411mjava.edtech.exception.handler.CustomHandlerExceptionResolver;
import com.s1411mjava.edtech.security.service.impl.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    private final UserDetailsService userDetailsService;
    private final HandlerExceptionResolver handlerExceptionResolver = new CustomHandlerExceptionResolver();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try {

            final String authorization = request.getHeader("Authorization");

            String token = null;
            String username = null;

            if(authorization != null && authorization.startsWith("Bearer ")){

                token = authorization.substring(7);

                username = jwtService.extractUsername(token);
            }



            if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){

                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                if(jwtService.validateToken(token, userDetails)){
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities()
                    );

                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }

            }

            filterChain.doFilter(request, response);
        } catch (UsernameNotFoundException e) {

            log.error("Error: user not found " + e.getMessage());
            handlerExceptionResolver.resolveException(request, response, null, e);
        }

        catch(ExpiredJwtException e){

            log.error("Error: token expired " + e.getMessage());
            handlerExceptionResolver.resolveException(request, response, null, e);
        }
        catch (Exception e) {
            // TODO: add resolver
            log.error("Error: otro error  " + e.getMessage());
            handlerExceptionResolver.resolveException(request, response, null, e);
        }

    }

}

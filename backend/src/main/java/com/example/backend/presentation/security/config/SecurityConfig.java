package com.example.backend.presentation.security.config;

import com.example.backend.presentation.security.handler.AccessDeniedHandlerImpl;
import com.example.backend.presentation.security.handler.AuthenticationEntryPointHandlerImpl;
import com.example.backend.presentation.security.handler.AuthenticationFailureHandlerImpl;
import com.example.backend.presentation.security.handler.AuthenticationSuccessHandlerImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // AUTHORIZE
                .authorizeRequests()
                .mvcMatchers("/signin", "/signup", "/csrf-token")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                // EXCEPTION
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint())
                .accessDeniedHandler(accessDeniedHandler())
                .and()
                // LOGIN
                .formLogin()
                .loginProcessingUrl("/signin").permitAll()
                .usernameParameter("email")
                .passwordParameter("password")
                .successHandler(authenticationSuccessHandler())
                .failureHandler(authenticationFailureHandler())
                .and()
                // LOGOUT
                .logout()
                .logoutUrl("/logout")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .logoutSuccessHandler(logoutSuccessHandler())
                // .addLogoutHandler(new CookieClearingLogoutHandler()) 追加のログアウト処理
                .and()
                // CSRF
                .csrf()
                .disable()
        // .ignoringAntMatchers("/signin", "/signup", "/csrf-token")
        // .csrfTokenRepository(new CookieCsrfTokenRepository());
        ;
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth,
            @Qualifier("SecurityUserDetailsService") UserDetailsService userDetailsService) throws Exception {
        auth.eraseCredentials(true)
                .userDetailsService(userDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    AuthenticationEntryPoint authenticationEntryPoint() {
        return new AuthenticationEntryPointHandlerImpl();
    }

    AccessDeniedHandler accessDeniedHandler() {
        return new AccessDeniedHandlerImpl();
    }

    AuthenticationSuccessHandler authenticationSuccessHandler() {
        return new AuthenticationSuccessHandlerImpl();
    }

    AuthenticationFailureHandler authenticationFailureHandler() {
        return new AuthenticationFailureHandlerImpl();
    }

    LogoutSuccessHandler logoutSuccessHandler() {
        return new HttpStatusReturningLogoutSuccessHandler();
    }

}
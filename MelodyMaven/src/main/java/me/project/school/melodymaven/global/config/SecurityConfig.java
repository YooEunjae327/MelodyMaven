package me.project.school.melodymaven.global.config;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.global.jwt.TokenProvider;
import me.project.school.melodymaven.global.utils.AuthorizationUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final AuthorizationUtil authorizationUtil;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable() // rest api 이므로  기본설정 안함
                .csrf().disable()   // csrf 설정안함
                .cors().disable()
                .authorizeRequests()
                //.antMatchers(HttpMethod.GET, "/admin").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/admin").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/info").hasRole("USER")
                .anyRequest().permitAll();

        http.
                httpBasic();

        http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

       // http
                //.apply(new TokenSecurityConfig(authorizationUtil));

        return http.build();
    }

}

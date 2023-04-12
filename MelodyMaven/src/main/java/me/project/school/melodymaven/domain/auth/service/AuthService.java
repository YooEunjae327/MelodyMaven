package me.project.school.melodymaven.domain.auth.service;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.auth.dto.request.JoinRequest;
import me.project.school.melodymaven.domain.auth.dto.request.LoginRequest;
import me.project.school.melodymaven.domain.auth.dto.response.LoginResponse;
import me.project.school.melodymaven.domain.auth.exception.AuthException;
import me.project.school.melodymaven.domain.user.entity.User;
import me.project.school.melodymaven.domain.user.repository.UserRepository;
import me.project.school.melodymaven.global.enums.UserRole;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    public void Join(JoinRequest request)  {
        if(userRepository.existsById(request.getId())) {
            throw new AuthException.AlreadyUserException();
        }

        User user = User.builder()
                .id(request.getId())
                .password(request.getPassword())
                .userRole(UserRole.valueOf("USER"))
                .build();
        userRepository.save(user);
    }

    public void login(LoginRequest request) {
    }
}

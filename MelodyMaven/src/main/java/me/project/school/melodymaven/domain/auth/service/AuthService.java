package me.project.school.melodymaven.domain.auth.service;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.auth.dto.request.AuthRequest;
import me.project.school.melodymaven.domain.auth.dto.response.LoginResponse;
import me.project.school.melodymaven.domain.auth.exception.AuthException;
import me.project.school.melodymaven.domain.user.entity.User;
import me.project.school.melodymaven.domain.user.repository.UserRepository;
import me.project.school.melodymaven.global.enums.JwtAuth;
import me.project.school.melodymaven.global.enums.UserRole;
import me.project.school.melodymaven.global.jwt.TokenProvider;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;


    public void Join(AuthRequest request)  {
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

    public LoginResponse login(AuthRequest request) {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder(5);

        User user = userRepository.findById(request.getId())
                .orElseThrow(AuthException.NotFoundUserException::new);

        if(!bcrypt.matches(request.getPassword(), user.getPassword())) {
            throw new AuthException.NotInaccurateInfo();
        }

        String accessToken = tokenProvider.generateToken(user.getId(), JwtAuth.ACCESS_TOKEN);
        String refreshToken = tokenProvider.generateToken(user.getPassword(), JwtAuth.REFRESH_TOKEN);

        return LoginResponse.builder()
                .accesstoken(accessToken)
                .refreshToken(refreshToken)
                .build();


    }
}

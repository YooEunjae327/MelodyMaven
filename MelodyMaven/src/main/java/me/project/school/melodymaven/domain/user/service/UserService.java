package me.project.school.melodymaven.domain.user.service;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.user.dto.response.UserInfoResponse;
import me.project.school.melodymaven.domain.user.entity.User;
import me.project.school.melodymaven.domain.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;


    public void userInfo() {
        //return User;
    }

}

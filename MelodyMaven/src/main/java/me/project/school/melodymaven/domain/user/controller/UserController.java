package me.project.school.melodymaven.domain.user.controller;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.user.dto.response.UserInfoResponse;
import me.project.school.melodymaven.domain.user.service.UserService;
import me.project.school.melodymaven.global.jwt.TokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final TokenProvider tokenProvider;
    private final UserService userService;

    @GetMapping("/info")
    @ResponseStatus(HttpStatus.OK)
    public void userInfo() {
        userService.userInfo();
    }

//    @PutMapping("/info")
//    public void

    @GetMapping("/test")
    public void Testing() {
        System.out.println("come port:3000");
    }


}

package me.project.school.melodymaven.domain.user.controller;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.global.jwt.TokenProvider;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final TokenProvider tokenProvider;

    @GetMapping("/info")
    public void Test() {
        System.out.println("aa");
       // System.out.println("security");
        //System.out.println(tokenProvider.validateToken(" "));
    }
    @GetMapping("/test")
    public void Testing() {
        System.out.println("come port:3000");
    }


}

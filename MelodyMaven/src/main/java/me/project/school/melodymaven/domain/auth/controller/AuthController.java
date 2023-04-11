package me.project.school.melodymaven.domain.auth.controller;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.auth.dto.request.JoinRequest;
import me.project.school.melodymaven.domain.auth.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/join")
    @ResponseStatus(HttpStatus.CREATED)
    public void Join(@RequestBody @Valid JoinRequest request){
        authService.Join(request);
    }
}
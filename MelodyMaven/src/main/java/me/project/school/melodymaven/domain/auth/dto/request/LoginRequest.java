package me.project.school.melodymaven.domain.auth.dto.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

@ToString
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class LoginRequest {

    @NotBlank
    private String id;
    @NotBlank
    private String password;
}

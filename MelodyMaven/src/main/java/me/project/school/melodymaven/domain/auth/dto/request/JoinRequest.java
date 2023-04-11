package me.project.school.melodymaven.domain.auth.dto.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

@ToString
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor()
public class JoinRequest {

    @NotBlank()
    private String id;

    private String password;
}

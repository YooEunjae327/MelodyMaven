package me.project.school.melodymaven.domain.token.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TokenResponse {
    private final String token;
    private final String message;
}

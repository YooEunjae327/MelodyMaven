package me.project.school.melodymaven.domain.recommend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class RecommendTokenResponse {
    private String token;
}

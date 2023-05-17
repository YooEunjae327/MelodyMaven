package me.project.school.melodymaven.domain.recommend.dto.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

@ToString
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class RecommendTokenRequest {

    @NotBlank
    private String token;

}

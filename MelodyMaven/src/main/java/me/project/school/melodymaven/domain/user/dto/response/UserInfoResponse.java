package me.project.school.melodymaven.domain.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import me.project.school.melodymaven.domain.user.entity.User;

@Getter
@AllArgsConstructor
@Builder
public class UserInfoResponse {

    private User user;
}

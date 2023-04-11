package me.project.school.melodymaven.domain.auth.exception;

import me.project.school.melodymaven.global.exception.GlobalException;
import org.springframework.http.HttpStatus;

public class AuthException {

    public static class alreadyUserException extends GlobalException {
        public alreadyUserException() {
            super(HttpStatus.CONFLICT, "이미존재하는 회원입니다.");
        }
    }
}

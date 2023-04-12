package me.project.school.melodymaven.domain.auth.exception;

import me.project.school.melodymaven.global.exception.GlobalException;
import org.springframework.http.HttpStatus;

public class AuthException {

    public static class AlreadyUserException extends GlobalException {
        public AlreadyUserException() {
            super(HttpStatus.CONFLICT, "이미존재하는 회원입니다.");
        }
    }

    public static class NotFoundUserException extends GlobalException {
        public NotFoundUserException() {
            super(HttpStatus.NOT_FOUND, "존재하지 않는 회원입니다.");
        }
    }
}

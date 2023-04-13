package me.project.school.melodymaven.global.api.exception;

import me.project.school.melodymaven.global.exception.GlobalException;
import org.springframework.http.HttpStatus;

public class YoutubeException {

    public static class InvalidFormatUrl extends GlobalException {
        public InvalidFormatUrl() { super(HttpStatus.BAD_REQUEST, "잘못된 형식의 URL입니다."); }
    }
}

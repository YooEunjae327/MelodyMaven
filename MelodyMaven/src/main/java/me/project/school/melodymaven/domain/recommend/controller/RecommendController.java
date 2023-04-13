package me.project.school.melodymaven.domain.recommend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recommend")
@RequiredArgsConstructor
public class RecommendController {

    @GetMapping("/{url}")
    public void recommend(@PathVariable("url") String url) {
        System.out.println(url);
    }
}

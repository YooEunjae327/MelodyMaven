package me.project.school.melodymaven.domain.recommend.controller;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.recommend.dto.response.RecommendResponse;
import me.project.school.melodymaven.domain.recommend.service.RecommendService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recommend")
@RequiredArgsConstructor
public class RecommendController {

    private final RecommendService recommendService;

    @GetMapping
    public RecommendResponse recommend(@RequestParam("url") String url) {
        return recommendService.recommend(url);
    }
}

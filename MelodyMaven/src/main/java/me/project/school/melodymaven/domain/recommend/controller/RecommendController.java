package me.project.school.melodymaven.domain.recommend.controller;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.recommend.dto.request.RecommendTokenRequest;
import me.project.school.melodymaven.domain.recommend.dto.response.RecommendResponse;
import me.project.school.melodymaven.domain.recommend.dto.response.RecommendTokenResponse;
import me.project.school.melodymaven.domain.recommend.service.RecommendService;
import org.springframework.web.bind.annotation.*;
import se.michaelthelin.spotify.model_objects.specification.Artist;
import se.michaelthelin.spotify.model_objects.specification.Paging;

import javax.validation.Valid;

@RestController
@RequestMapping("/recommend")
@RequiredArgsConstructor
public class RecommendController {

    private final RecommendService recommendService;

    @GetMapping
    public RecommendResponse recommend(@RequestParam("url") String url) {
        return recommendService.recommend(url);
    }

    @GetMapping("/spotify/token")
    public RecommendTokenResponse Token() {
        return recommendService.Token();
    }

    @GetMapping("/spotify")
    public Paging<Artist> FindArtist(@RequestParam("artist") String artist, @RequestParam("token") String token ) {
        return recommendService.FindArtist(token ,artist);
    }
}



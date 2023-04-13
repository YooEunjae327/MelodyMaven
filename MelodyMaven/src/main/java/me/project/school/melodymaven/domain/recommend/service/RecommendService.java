package me.project.school.melodymaven.domain.recommend.service;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.global.api.YoutubeSearch;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecommendService {

    private final YoutubeSearch youtubeSearch;

    public void recommend(String url) {
        System.out.println(youtubeSearch.findUrlTitle(url));

    }
}

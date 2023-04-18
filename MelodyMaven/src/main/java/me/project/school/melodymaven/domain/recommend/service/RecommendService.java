package me.project.school.melodymaven.domain.recommend.service;

import com.theokanning.openai.completion.CompletionChoice;
import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.recommend.dto.response.RecommendResponse;
import me.project.school.melodymaven.global.api.YoutubeSearch;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class RecommendService {

    private final YoutubeSearch youtubeSearch;

    public RecommendResponse recommend(String url) {
        ArrayList<CompletionChoice> list = youtubeSearch.findUrlTitle(url);

        return RecommendResponse.builder()
                .list(list)
                .build();

    }
}

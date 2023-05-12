package me.project.school.melodymaven.domain.recommend.service;

import com.theokanning.openai.completion.CompletionChoice;
import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.recommend.dto.request.RecommendTokenRequest;
import me.project.school.melodymaven.domain.recommend.dto.response.RecommendResponse;
import me.project.school.melodymaven.global.api.spotify.Spotify;
import me.project.school.melodymaven.global.api.YoutubeSearch;
import me.project.school.melodymaven.global.api.spotify.SpotifyArtist;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class RecommendService {

    private final YoutubeSearch youtubeSearch;
    private final Spotify spotify;
    private final SpotifyArtist spotifyArtist;

    public RecommendResponse recommend(String url) {
        ArrayList<CompletionChoice> list = youtubeSearch.findUrlTitle(url);

        return RecommendResponse.builder()
                .list(list)
                .build();

    }

    public void Analyze(String artist) {
        spotify.accesstoken();
    }


    public void FindArtist(RecommendTokenRequest request) {
        spotifyArtist.searchArtists_Sync(request.getToken(), request.getArtist());
    }
}

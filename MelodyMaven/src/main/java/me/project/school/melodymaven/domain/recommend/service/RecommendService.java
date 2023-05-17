package me.project.school.melodymaven.domain.recommend.service;

import com.theokanning.openai.completion.CompletionChoice;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import me.project.school.melodymaven.domain.recommend.dto.request.RecommendTokenRequest;
import me.project.school.melodymaven.domain.recommend.dto.response.RecommendResponse;
import me.project.school.melodymaven.domain.recommend.dto.response.RecommendTokenResponse;
import me.project.school.melodymaven.global.api.spotify.Spotify;
import me.project.school.melodymaven.global.api.YoutubeSearch;
import me.project.school.melodymaven.global.api.spotify.SpotifyArtist;
import org.springframework.stereotype.Service;
import se.michaelthelin.spotify.model_objects.specification.Artist;
import se.michaelthelin.spotify.model_objects.specification.Paging;

import java.util.ArrayList;

@Log4j2
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

    public RecommendTokenResponse Token() {
        spotify.accesstoken();
        return RecommendTokenResponse.builder()
                .token(spotify.accesstoken())
                .build();
    }


    public Paging<Artist> FindArtist(String token, String artist) {
        log.info(token, artist);
        return spotifyArtist.searchArtists_Sync(token, artist);
    }
}

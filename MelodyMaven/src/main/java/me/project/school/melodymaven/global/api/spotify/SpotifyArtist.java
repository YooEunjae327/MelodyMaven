package me.project.school.melodymaven.global.api.spotify;

import org.springframework.stereotype.Component;
import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.specification.Artist;
import se.michaelthelin.spotify.model_objects.specification.Paging;
import se.michaelthelin.spotify.requests.data.search.simplified.SearchArtistsRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.Arrays;

@Component
public class SpotifyArtist {
//    private static final String accessToken = "BQBDyASCgvTt_a1Wr0nTsYMbps2TWZZoV5uBu0aZHXYk6jduoLwRxFn8wlPQc73ZcJa4gDOTfKzidHXXZUCUDsOeGqX-_yf8lV8Zr9FYe4jDFK3fm99k";
//    private static final String q = "Toamto";



    public void searchArtists_Sync(String token, String q) {
        final SpotifyApi spotifyApi = new SpotifyApi.Builder()
                .setAccessToken(token)
                .build();

        final SearchArtistsRequest searchArtistsRequest = spotifyApi.searchArtists(q)
                .limit(30)
                .offset(0)
                .build();

        try {
            final Paging<Artist> artistPaging = searchArtistsRequest.execute();

            for(Artist x : artistPaging.getItems()) {
                System.out.println(x);
            }
            System.out.println("Total: " + artistPaging.getTotal());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }



}
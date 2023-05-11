package com.api.test;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.specification.Artist;
import se.michaelthelin.spotify.model_objects.specification.Paging;
import se.michaelthelin.spotify.requests.data.search.simplified.SearchArtistsRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.Arrays;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;

public class SpotifyArtists {
    private static final String accessToken = "BQBDyASCgvTt_a1Wr0nTsYMbps2TWZZoV5uBu0aZHXYk6jduoLwRxFn8wlPQc73ZcJa4gDOTfKzidHXXZUCUDsOeGqX-_yf8lV8Zr9FYe4jDFK3fm99k";
    private static final String q = "Toamto";

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();
    private static final SearchArtistsRequest searchArtistsRequest = spotifyApi.searchArtists(q)
//          .market(CountryCode.SE)
            .limit(30)
            .offset(0)
            .build();

    public static void searchArtists_Sync() {
        try {
            final Paging<Artist> artistPaging = searchArtistsRequest.execute();

            System.out.println(Arrays.toString(artistPaging.getItems()));
            System.out.println("Total: " + artistPaging.getTotal());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

//    public static void searchArtists_Async() {
//        try {
//            final CompletableFuture<Paging<Artist>> pagingFuture = searchArtistsRequest.executeAsync();
//
//            // Thread free to do other tasks...
//
//            // Example Only. Never block in production code.
//            final Paging<Artist> artistPaging = pagingFuture.join();
//
//            System.out.println("Total: " + artistPaging.getTotal());
//        } catch (CompletionException e) {
//            System.out.println("Error: " + e.getCause().getMessage());
//        } catch (CancellationException e) {
//            System.out.println("Async operation cancelled.");
//        }
//    }

    public static void main(String[] args) {
        searchArtists_Sync();
        //searchArtists_Async();
    }
}
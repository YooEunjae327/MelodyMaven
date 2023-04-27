package me.project.school.melodymaven.global.api;

import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.SearchListResponse;
import com.theokanning.openai.completion.CompletionChoice;
import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.global.api.exception.YoutubeException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;

@Component
@RequiredArgsConstructor
public class YoutubeSearch {

    private final OpenAi openAi;

    @Value("${api.key.youtube}")
    private String apiKey;

    /** Global instance properties filename. */
    private static final String PROPERTIES_FILENAME = "youtube.properties";

    /** Global instance of the HTTP transport. */
    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();

    /** Global instance of the JSON factory. */
    private static final JsonFactory JSON_FACTORY = new JacksonFactory();

    /** Global instance of the max number of videos we want returned (50 = upper limit per page). */
    private static final long NUMBER_OF_VIDEOS_RETURNED = 25;

    /** Global instance of Youtube object to make all API requests. */
    private static YouTube youtube;

    private SearchListResponse searchListResponse;

    public ArrayList<CompletionChoice> findUrlTitle(String url) {

        try {
            youtube = new YouTube.Builder(HTTP_TRANSPORT, JSON_FACTORY, new HttpRequestInitializer() {
                public void initialize(HttpRequest request) throws IOException {}
            }).setApplicationName("youtube-cmdline-search").build();

            YouTube.Search.List search = youtube.search().list("id,snippet");

            search.setKey(apiKey);
            search.setType("video");
            search.setFields("items(id/kind,id/videoId,snippet/title,snippet/thumbnails/default/url)");
            search.setSafeSearch("none");
            search.setMaxResults(1L);
            search.setQ(url);

            searchListResponse = search.execute();

            if(searchListResponse == null) {
                throw new YoutubeException.InvalidFormatUrl();
            }
            System.out.println(searchListResponse.getItems().get(0).getSnippet());
            return openAi.recommendMusic(searchListResponse.getItems().get(0).getSnippet().getTitle());
        } catch (GoogleJsonResponseException e) {
            System.err.println("There was a service error: " + e.getDetails().getCode() + " : "
                    + e.getDetails().getMessage());
        } catch (IOException e) {
            System.err.println("There was an IO error: " + e.getCause() + " : " + e.getMessage());
        } catch (Throwable t) {
            t.printStackTrace();
        }

        return null;
    }
}

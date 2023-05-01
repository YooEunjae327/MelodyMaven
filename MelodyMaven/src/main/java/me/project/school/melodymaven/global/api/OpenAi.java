package me.project.school.melodymaven.global.api;

import com.theokanning.openai.completion.CompletionChoice;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class OpenAi {

    @Value("${api.key.open-ai}")
    private String token;

    public ArrayList<CompletionChoice> recommendMusic(String music, String channelTitle ) {
        OpenAiService service = new OpenAiService(token);

        CompletionRequest completionRequest = CompletionRequest.builder()
                .prompt("Please recommend 10 songs of the same genre as \"" + music +  "\" For each result, just tell me the song you made")
                //.temperature((double) 2)
                .model("text-davinci-003")
                .maxTokens(256)
                .echo(true)
                .n(1)
                .build();

        System.out.println(new ArrayList<>(service.createCompletion(completionRequest).getChoices()));
        return new ArrayList<>(service.createCompletion(completionRequest).getChoices());
    }

}

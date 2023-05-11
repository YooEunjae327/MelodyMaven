package com.api.test;

import com.theokanning.openai.completion.CompletionChoice;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.service.OpenAiService;

import java.util.ArrayList;
import java.util.Arrays;

public class ModelDavinci003 {
    public static void main(String[] args) {;
        String token = System.getenv("OPENAI_TOKEN");
        OpenAiService service = new OpenAiService(token);

        CompletionRequest completionRequest = CompletionRequest.builder()
                .prompt("Gotye - Somebody That Used To Know (feat. Kimbra) Please recommend 10 songs in the same genre as [Official Music Video] The name of the song and the person who made it")
                .model("text-davinci-003")
                .maxTokens(120)
                .echo(true)
                .n(1)
                .build();
        ArrayList<CompletionChoice> storyArray = new ArrayList<CompletionChoice>(service.createCompletion(completionRequest).getChoices());

        System.out.println(storyArray);
//        String[] a = storyArray.get(0).getText().split("\n");
//        System.out.println(Arrays.toString(a));
    }
}

// Do I Wanna Know by Arctic Monkeys is considered alternative rock., index=0, logprobs=null, finish_reason=length)]
// What kind of music genre is  Get Lucky by Daft Punk? Just tell me the music genre

// "Please recommend 10 songs similar to Do I Wanna Know made by Arctic Monkeys Please tell us the name of the song and who made it"
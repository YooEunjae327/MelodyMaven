package me.project.school.melodymaven.domain.recommend.dto.response;

import com.theokanning.openai.completion.CompletionChoice;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;

@Getter
@AllArgsConstructor
@Builder
public class RecommendResponse {
    private ArrayList<CompletionChoice> list;
}

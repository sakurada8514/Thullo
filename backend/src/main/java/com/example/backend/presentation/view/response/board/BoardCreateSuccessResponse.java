package com.example.backend.presentation.view.response.board;

import com.example.backend.presentation.view.response.SuccessResponse;

import lombok.Getter;

@Getter
public class BoardCreateSuccessResponse extends SuccessResponse {
    private Long id;

    public BoardCreateSuccessResponse(Long boardId) {
        this.id = boardId;
    }
}

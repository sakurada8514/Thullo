package com.example.backend.presentation.view.response.board;

import com.example.backend.domain.model.board.Board;

import lombok.Getter;

@Getter
public class BoardDetailResponse {
    private Board board;

    public BoardDetailResponse(Board board) {
        this.board = board;
    }
}

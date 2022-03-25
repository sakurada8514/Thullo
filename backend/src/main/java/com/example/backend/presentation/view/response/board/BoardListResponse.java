package com.example.backend.presentation.view.response.board;

import java.util.List;

import com.example.backend.domain.model.board.Board;

import lombok.Getter;

@Getter
public class BoardListResponse {
    private List<Board> boardList;

    public BoardListResponse(List<Board> boardList) {
        this.boardList = boardList;
    }
}

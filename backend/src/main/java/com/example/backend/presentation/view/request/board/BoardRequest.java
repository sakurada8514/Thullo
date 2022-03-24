package com.example.backend.presentation.view.request.board;

import com.example.backend.domain.model.board.Board;

import lombok.Setter;

@Setter
public class BoardRequest {
    private String boardName;
    private String boardDiscription;
    private String image;
    private Integer publicScopeType;

    public Board toBoard(Long principalUserId) {
        return new Board(this.boardName, this.boardDiscription, this.publicScopeType, this.image, principalUserId);
    }
}

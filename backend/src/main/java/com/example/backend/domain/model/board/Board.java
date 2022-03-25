package com.example.backend.domain.model.board;

public class Board {
    Long id;
    String boardName;
    String boardDiscription;
    Integer publicScopeType;
    String image;
    Long adminUserId;

    public Board(String boardName, String boardDiscription, Integer publicScopeType, String image, Long adminUserId) {
        this.boardName = boardName;
        this.boardDiscription = boardDiscription;
        this.publicScopeType = publicScopeType;
        this.image = image;
        this.adminUserId = adminUserId;
    }

    public Long id() {
        return this.id;
    }

    public Long adminUserId() {
        return this.adminUserId;
    }
}

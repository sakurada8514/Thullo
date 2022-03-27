package com.example.backend.domain.model.board;

import lombok.Data;

@Data
public class Board {
    private Long id;
    private String boardName;
    private String boardDiscription;
    private Integer publicScopeType;
    private String image;
    private Long adminUserId;

    public Board() {
    }

    public Board(String boardName, String boardDiscription, Integer publicScopeType, String image, Long adminUserId) {
        this.boardName = boardName;
        this.boardDiscription = boardDiscription;
        this.publicScopeType = publicScopeType;
        this.image = image;
        this.adminUserId = adminUserId;
    }
}

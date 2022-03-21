package com.example.backend.support.constant;

public enum Error {
    FORBIDDEN("FORBIDDEN", "認証エラーまたはアクセス権限がありません。"),
    UNAUTHORIZED("UNAUTHORIZED", "ログインに失敗しました。"),
    REGISTERED("REGISTERED", "既に登録済みのアカウントです");

    private String code;
    private String message;

    Error(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String code() {
        return this.code;
    }

    public String message() {
        return this.message;
    }
}

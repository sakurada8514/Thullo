package com.example.backend.domain.model.user;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

public class SignInUser extends org.springframework.security.core.userdetails.User {
    private User user;

    public User user() {
        return this.user;
    }

    public SignInUser(User user) {
        super(user.name(), user.password(), USER_ROLES);
        this.user = user;
    }

    private static final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

}

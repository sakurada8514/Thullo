package com.example.backend.domain.model.user;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

public class PrincipalUser extends org.springframework.security.core.userdetails.User {
    private User user;

    public User user() {
        return this.user;
    }

    public PrincipalUser(User user) {
        super(user.getEmail(), user.getPassword(), USER_ROLES);
        this.user = user;
    }

    private static final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

}

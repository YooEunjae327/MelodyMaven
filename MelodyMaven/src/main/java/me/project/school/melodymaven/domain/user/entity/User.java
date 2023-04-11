package me.project.school.melodymaven.domain.user.entity;

import lombok.*;
import me.project.school.melodymaven.global.enums.UserRole;

import javax.persistence.*;

@Entity
@ToString
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "user")
public class User {

    @Id
    @Column(nullable = false)
    private String id;

    @Column
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole userRole;

    @Builder
    public User(String id, String password, UserRole userRole) {
        this.id = id;
        this.password = password;
        this.userRole = userRole;

    }

}
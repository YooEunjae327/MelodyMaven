package me.project.school.melodymaven.domain.user.entity;

import lombok.*;
import me.project.school.melodymaven.global.enums.UserRole;

import javax.persistence.*;

@Entity
@ToString
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(nullable = false)
    private String id;

    private String password;

    @Enumerated(EnumType.ORDINAL)
    private UserRole userRole;

    @Builder
    public User(String id, String password, UserRole userRole) {
        this.id = id;
        this.password = password;
        this.userRole = userRole;
    }

}

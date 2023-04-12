package me.project.school.melodymaven.domain.user.entity;

import lombok.*;
import me.project.school.melodymaven.global.enums.UserRole;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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
        this.password = PasswordEncoder(password);
        this.userRole = userRole;

    }

    /**
     * Please explain the class!!
     *
     * @filename       : User.java
     * @author        : tomato
     * @since         : 2023/04/12
     * @param password salt 지정하여 인코딩 횟수 감추기          :
     */
    private String PasswordEncoder(String password) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(5);

        return bCryptPasswordEncoder.encode(password);
    }

}

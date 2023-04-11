package me.project.school.melodymaven.domain.user.repository;

import me.project.school.melodymaven.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsById(String id);
}

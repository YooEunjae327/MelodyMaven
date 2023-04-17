package me.project.school.melodymaven.global.jwt;

import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.domain.auth.exception.AuthException;
import me.project.school.melodymaven.domain.user.entity.User;
import me.project.school.melodymaven.domain.user.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        User user = userRepository.findById(id)
                .orElseThrow(AuthException.NotFoundUserException::new);

        return new UserDetail(user);
    }
}

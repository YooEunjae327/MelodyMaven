package me.project.school.melodymaven.global.utils;

import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import me.project.school.melodymaven.global.properties.AppProperties;
import org.apache.logging.log4j.util.Strings;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Component
@RequiredArgsConstructor
public class AuthorizationUtil {

    private final UserDetailsService userDetailsService;
    private final AppProperties appProperties;

    public static String AUTHORIZATION = "Authorization";

    public Authentication getAuthentication(String token) {
        String username = Jwts.parser().setSigningKey(appProperties.getAccessSecret()).parseClaimsJws(token).getBody().getSubject();
        UserDetails userDetails = userDetailsService
                .loadUserByUsername(username);

        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public static String extract(HttpServletRequest request, String type) {
        Enumeration<String> headers = request.getHeaders(AUTHORIZATION);

        while (headers.hasMoreElements()) {
            String value = headers.nextElement();
            if (value.toLowerCase().startsWith(type.toLowerCase())) {
                return value.substring(type.length()).trim();
            }
        }

        return Strings.EMPTY;
    }
}

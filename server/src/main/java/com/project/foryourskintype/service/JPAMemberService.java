package com.project.foryourskintype.service;

import com.project.foryourskintype.domain.Member;
import com.project.foryourskintype.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class JPAMemberService implements MemberService {

    private final MemberRepository memberRepository;


    @Override
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    @Override
    public int Login(String email, String password, HttpServletRequest request) {
        Optional<Member> member = memberRepository.findByEmail(email);
        HttpSession session = request.getSession(); //세션을 만들기

        if (member.isPresent()) {
            if (member.get().getPassword().equals(password)) {
                session.setAttribute(email, email); //로그인에 성공할 경우 세션 값 저장
                log.info("login success");
                return 1; //로그인 성공

            } else {
                log.info("login fail");
                return 0; //로그인 실패
            }
        } else {
            log.info("login fail");
            return 0; //로그인 실패
        }
    }

    private boolean validateDuplicateMember(Member member) {
        memberRepository.findByEmail(member.getEmail())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
        return false;
    }

}

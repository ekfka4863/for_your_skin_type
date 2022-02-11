package com.project.foryourskintype.service;

import com.project.foryourskintype.domain.Member;
import com.project.foryourskintype.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class JPAMemberService implements MemberService {

    private final MemberRepository memberRepository;


    @Override
    public Member findById(Long id) {
        Optional<Member> findMember = memberRepository.findById(id);
        return findMember.orElse(Member.createNullMember());
    }

    @Override
    public Member findByName(String name) {
        Optional<Member> findMember = memberRepository.findByName(name);
        return findMember.orElse(Member.createNullMember());
    }

    @Override
    public Member findByEmail(String email) {
        Optional<Member> findMember = memberRepository.findByEmail(email);
        return findMember.orElse(Member.createNullMember());
    }

    @Override
    public Long join(Member member) {
        validateDuplicateMember(member); //중복회원인지(이메일이 같은지) 확인
        memberRepository.save(member);
        return member.getId();
    }

    @Override
    public int Login(String email, String password, HttpServletRequest request) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent()) {
            if (member.get().getPassword().equals(password)) {
                request.getSession().setAttribute("key", email); //로그인에 성공할 경우 세션 값 저장
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

    @Override
    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    @Override
    public List<Member> findWithLikedItems() {
        return memberRepository.findWithLikedItems();
    }

    @Override
    public void delete(Long id) {
        memberRepository.delete(id);
    }

    private boolean validateDuplicateMember(Member member) {
        memberRepository.findByEmail(member.getEmail())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
        return false;
    }

}

package com.project.foryourskintype.service;
import com.project.foryourskintype.domain.Member;
import com.project.foryourskintype.repository.MemberRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.Optional;

@Service
public class JPAMemberService implements MemberService{

    private final EntityManager em;
    private final MemberRepository memberRepository;

    public JPAMemberService(EntityManager em, MemberRepository memberRepository) {
        this.em = em;
        this.memberRepository = memberRepository;
    }

    @Override
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m-> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

}

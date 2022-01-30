package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Member;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Long save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    Optional<Member> findByEmail(String email);
    List<Member> findAll();
    List<Member> findWithLikedItems();
    void delete(Long id);
}

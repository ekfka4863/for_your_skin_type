package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Transactional
public class JPAMemberRepository implements MemberRepository{

    private final EntityManager em;

    @Override
    public Long save(Member member) {
        em.persist(member);
        return member.getId();
    }

    @Override
    public Optional<Member> findById(Long id) {
        Member findMember = em.find(Member.class, id);
        return Optional.ofNullable(findMember);
    }

    @Override
    public Optional<Member> findByName(String name) {
        return em.createQuery("select m from Member m where m.name=:name", Member.class)
                .setParameter("name", name)
                .getResultList()
                .stream()
                .findAny();
    }

    @Override
    public Optional<Member> findByEmail(String email) {
        return em.createQuery("select m from Member m where m.email=:email", Member.class)
                .setParameter("email", email)
                .getResultList()
                .stream()
                .findAny();
    }


    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    @Override
    public List<Member> findLikedItems() {
        return em.createQuery("select m from Member m" +
                " join fetch m.likedItems li" +
                " join fetch li.item i", Member.class)
                .getResultList();
    }


    @Override
    public void delete(Long id) {
        Member findMember = em.find(Member.class, id);
        em.remove(findMember);
    }
}

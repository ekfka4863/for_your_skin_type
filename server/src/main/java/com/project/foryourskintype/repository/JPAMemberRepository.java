package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Member;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class JPAMemberRepository implements MemberRepository{

    private final EntityManager em;

    public JPAMemberRepository(EntityManager em) {
        this.em = em;
    }

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
    @Transactional(readOnly = true)
    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    @Override
    public void delete(Long id) {
        Member findMember = em.find(Member.class, id);
        em.remove(findMember);
    }
}

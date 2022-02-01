package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.LikedItem;
import com.project.foryourskintype.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Transactional
public class JPALikedItemRepository implements LikedItemRepository{

    private final EntityManager em;

    @Override
    public Long save(LikedItem likedItem) {
        em.persist(likedItem);
        return likedItem.getId();
    }

    @Override
    public List<LikedItem> findAll() {
        return em.createQuery("select l from LikedItem l", LikedItem.class)
                .getResultList();
    }

    @Override
    public Optional<LikedItem> findById(Long id) {
        LikedItem findLikedItem = em.find(LikedItem.class, id);
        return Optional.ofNullable(findLikedItem);
    }

    @Override
    public List<LikedItem> findAllByEmail(String email) {
        return em.createQuery("select l from LikedItem l" +
                " join fetch l.item i" +
                " join fetch l.member m" +
                " where l.member.email=:email", LikedItem.class)
                .setParameter("email", email)
                .getResultList();
    }


    @Override
    public void delete(Long id) {
        LikedItem likedItem = em.find(LikedItem.class, id);
        em.remove(likedItem);
    }
}

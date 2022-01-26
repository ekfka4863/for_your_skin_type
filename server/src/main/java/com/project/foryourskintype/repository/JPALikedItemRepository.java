package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.LikedItem;
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
    @Transactional(readOnly = true)
    public List<LikedItem> findAll() {
        return em.createQuery("select l from LikedItem l", LikedItem.class)
                .getResultList();
    }

    @Override
    public Optional<LikedItem> findOne(Long id) {
        LikedItem findLikedItem = em.find(LikedItem.class, id);
        return Optional.ofNullable(findLikedItem);
    }

    @Override  //해결해야함 페치조인으로 엔티티를 다 가져와야 할것같음
    public Optional<LikedItem> findOneFetch(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {
        LikedItem likedItem = em.find(LikedItem.class, id);
        em.remove(likedItem);
    }
}

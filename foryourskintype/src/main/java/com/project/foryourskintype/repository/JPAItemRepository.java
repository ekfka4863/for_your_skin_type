package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Item;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@Transactional
@RequiredArgsConstructor
public class JPAItemRepository implements ItemRepository{

    private final EntityManager em;

    @Override
    public Long save(Item item){
        em.persist(item);

        return item.getId();
    }

    @Override
    public Item findOne(Long id) {
        return em.find(Item.class, id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Item> findAll(){
        return em.createQuery("select i from Item i", Item.class)
                .getResultList();
    }

    @Override
    public void delete(Long id) {
        Item item = em.find(Item.class, id);
        em.remove(item);
    }

}

package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Item;

import java.util.List;
import java.util.Optional;

public interface ItemRepository {
    Long save(Item item);
//    void update(Long id);
    Optional<Item> findOne(Long id);
    List<Item> findAll();
    void delete(Long id);
}

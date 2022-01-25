package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Item;

import java.util.List;

public interface ItemRepository {
    Long save(Item item);
//    void update(Long id);
    Item findOne(Long id);
    List<Item> findAll();
    void delete(Long id);
}

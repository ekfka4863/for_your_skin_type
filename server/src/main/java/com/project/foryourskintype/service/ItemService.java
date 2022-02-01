package com.project.foryourskintype.service;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.SkinType;

import java.util.List;

public interface ItemService {
    Long save(Item item);
    List<Item> findAll();
    Item findOne(Long id);
    void delete(Long id);
    List<Item> findDrItem();
    List<Item> findInItem();
    List<Item> findSiItem();
    List<Item> findBeItem();
    List<Item> findSkinTypeItem(SkinType skinType);
    List<Item> findSkinBrand(String brand);
}

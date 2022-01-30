package com.project.foryourskintype.service;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.ItemFeature;
import com.project.foryourskintype.domain.SkinType;

import java.util.List;

public interface ItemService {
    List<Item> findDrItem();
    List<Item> findInItem();
    List<Item> findSiItem();
    List<Item> findBeItem();
    List<Item> findSkinTypeItem(SkinType skinType);
    List<Item> findSkinBrand(String brand);
}

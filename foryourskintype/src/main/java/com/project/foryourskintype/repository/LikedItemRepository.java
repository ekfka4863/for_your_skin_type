package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.LikedItem;

import java.util.List;
import java.util.Optional;

public interface LikedItemRepository {
    Long save(LikedItem likedItem);
    List<LikedItem> findAll();
    Optional<LikedItem> findOne(Long id);
    Optional<LikedItem> findOneFetch(Long id);
    void delete(Long id);
}

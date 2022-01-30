package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.LikedItem;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

public interface LikedItemRepository {
    Long save(LikedItem likedItem);
    List<LikedItem> findAll();
    Optional<LikedItem> findById(Long id);
    List<LikedItem> findAllByMember(String email);
    void delete(Long id);
}

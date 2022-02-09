package com.project.foryourskintype.repository;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.LikedItem;
import com.project.foryourskintype.domain.Member;

import java.util.List;
import java.util.Optional;

public interface LikedItemRepository {
    Long save(LikedItem likedItem);
    List<LikedItem> findAll();
    Optional<LikedItem> findById(Long id);
    List<LikedItem> findAllByEmail(String email);
    void delete(Item item, Member member);
}

package com.project.foryourskintype.controller;

import com.project.foryourskintype.domain.LikedItem;
import com.project.foryourskintype.dto.LikedItemSaveRequest;
import com.project.foryourskintype.repository.LikedItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
@Transactional
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class LikedItemController {

    private final LikedItemRepository likedItemRepository;

    @PostMapping("items/favoritesAdd")
    public void save(@RequestBody LikedItemSaveRequest likedItemSaveRequest){
        //이부분에서 LikedItemRepository.findOneFetch를 사용해서 페치조인으로 엔티티를 다 가져와야 이게 실행될것같음
        LikedItem findLikedItem = likedItemRepository.findOne(likedItemSaveRequest.getId()).get();
        likedItemRepository.save(findLikedItem);
    }

    @PostMapping("items/faveritesDelete")
    public void delete(@RequestBody LikedItemSaveRequest likedItemSaveRequest){
        likedItemRepository.delete(likedItemSaveRequest.getId());
    }
}

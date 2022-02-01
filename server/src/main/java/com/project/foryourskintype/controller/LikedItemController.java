package com.project.foryourskintype.controller;

import com.project.foryourskintype.domain.LikedItem;
import com.project.foryourskintype.dto.*;
import com.project.foryourskintype.repository.LikedItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Transactional
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class LikedItemController {

    private final LikedItemRepository likedItemRepository;

    @PostMapping("items/favorites") //회원(email -> 세션아이디)에 따른 장바구니 조회 API
    public Result readLikedItemsByMember(@RequestBody LikedItemReadRequest likedItemReadRequest){

        List<LikedItemDto> collect = likedItemRepository.findAllByEmail(likedItemReadRequest.getEmail())
                .stream()
                .map(l -> new LikedItemDto(l))
                .collect(Collectors.toList());

        return new Result(collect);
    }

    @PostMapping("items/favoritesAdd") //장바구니 아이템 추가 API
    public Long save(@RequestBody LikedItemSaveRequest likedItemSaveRequest) {
        LikedItem createLikedItem = LikedItem.createLikedItem(likedItemSaveRequest.getItem(),
                likedItemSaveRequest.getMember());

        return likedItemRepository.save(createLikedItem);
    }

    @PostMapping("items/favoritesDelete") //장바구니 아이템 삭제 API
    public void delete(@RequestBody LikedItemSaveRequest likedItemSaveRequest) {
        likedItemRepository.delete(likedItemSaveRequest.getId());
    }
}

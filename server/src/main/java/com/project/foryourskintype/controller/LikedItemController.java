package com.project.foryourskintype.controller;

import com.project.foryourskintype.domain.LikedItem;
import com.project.foryourskintype.domain.Member;
import com.project.foryourskintype.dto.*;
import com.project.foryourskintype.repository.LikedItemRepository;
import com.project.foryourskintype.repository.MemberRepository;
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
    private final MemberRepository memberRepository;

    @GetMapping("items/favorites") //장바구니 조회 API
    public Result readByMember() {
        List<MemberWithLikedItem> collect = memberRepository.findWithLikedItems()
                .stream()
                .map(m -> new MemberWithLikedItem(m))
                .collect(Collectors.toList());
        return new Result(collect);
    }

    @PostMapping("items/favorites")
    public Result readLikedItemsByMember(@RequestBody LikedItemReadRequest likedItemReadRequest){
        memberRepository.findWithLikedItems()
                .stream()
                .map(m -> new LikedItemDto(m))
        return new Result(collect);
    }

    @PostMapping("items/favoritesAdd")
    public Long save(@RequestBody LikedItemSaveRequest likedItemSaveRequest) {
        LikedItem createLikedItem = LikedItem.createLikedItem(likedItemSaveRequest.getItem(),
                likedItemSaveRequest.getMember());

        return likedItemRepository.save(createLikedItem);
    }

    @PostMapping("items/favoritesDelete")
    public void delete(@RequestBody LikedItemSaveRequest likedItemSaveRequest) {
        likedItemRepository.delete(likedItemSaveRequest.getId());
    }
}

package com.project.foryourskintype.controller;

import com.project.foryourskintype.domain.LikedItem;
import com.project.foryourskintype.domain.Member;
import com.project.foryourskintype.dto.*;
import com.project.foryourskintype.repository.LikedItemRepository;
import com.project.foryourskintype.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@Transactional
@RequiredArgsConstructor
@CrossOrigin("*")
public class LikedItemController {

    private final LikedItemRepository likedItemRepository;
    private final MemberService memberService;

    @GetMapping("items/favorites")
    public Result readLikedItemsByMember(HttpSession session){
        System.out.println("session = " + session.getAttribute("key"));
        List<LikedItemDto> collect = likedItemRepository.findAllByEmail(session.getAttribute("key").toString())
                .stream()
                .map(l -> new LikedItemDto(l))
                .collect(Collectors.toList());

        return new Result(collect);
    }

    @PostMapping("items/favoritesAdd") //장바구니 아이템 추가 API
    public Long save(@RequestBody LikedItemSaveRequest likedItemSaveRequest, HttpSession session) {
        Member findMember = memberService.findByEmail(session.getAttribute("key").toString());
        LikedItem createLikedItem = LikedItem.createLikedItem(likedItemSaveRequest.getItem(),
                findMember);

        return likedItemRepository.save(createLikedItem);
    }

    @PostMapping("items/favoritesDelete") //장바구니 아이템 삭제 API
    public void delete(@RequestBody LikedItemSaveRequest likedItemSaveRequest, HttpSession session) {
        Member findMember = memberService.findByEmail(session.getAttribute("key").toString());
        likedItemRepository.delete(likedItemSaveRequest.getItem(), findMember);
    }

}

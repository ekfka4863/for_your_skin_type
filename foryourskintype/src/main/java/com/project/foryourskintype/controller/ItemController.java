package com.project.foryourskintype.controller;

import com.project.foryourskintype.dto.ItemDto;
import com.project.foryourskintype.dto.ReadItemSkinTypeRequest;
import com.project.foryourskintype.repository.ItemRepository;
import com.project.foryourskintype.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Transactional
@RequiredArgsConstructor
public class ItemController {

    private final ItemRepository itemRepository;
    private final ItemService itemService;

    @GetMapping("/url") //상품 전체 조회 API
    public Result readAll(){
        List<ItemDto> collect = itemRepository.findAll()
                .stream()
                .map(m -> new ItemDto(m.getId(),
                        m.getName(),
                        m.getPrice(),
                        m.getPriceSign(),
                        m.getBrand(),
                        m.getImageLink(),
                        m.getProductLink(),
                        m.getWebsiteLink(),
                        m.getItemFeature(),
                        m.getSkinType()))
                .collect(Collectors.toList());

        return new Result(collect);
    }

    @GetMapping("/url/drjart") // drjart 상품조회 API
    public Result readDrjartItem(){
        List<ItemDto> collect = itemService.findDrItem()
                .stream()
                .map(m -> new ItemDto(m.getId(),
                        m.getName(),
                        m.getPrice(),
                        m.getPriceSign(),
                        m.getBrand(),
                        m.getImageLink(),
                        m.getProductLink(),
                        m.getWebsiteLink(),
                        m.getItemFeature(),
                        m.getSkinType()))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @GetMapping("/url/innisfree") // innisfree 상품조회 API
    public Result readInnisfreeItem(){
        List<ItemDto> collect = itemService.findInItem()
                .stream()
                .map(m -> new ItemDto(m.getId(),
                        m.getName(),
                        m.getPrice(),
                        m.getPriceSign(),
                        m.getBrand(),
                        m.getImageLink(),
                        m.getProductLink(),
                        m.getWebsiteLink(),
                        m.getItemFeature(),
                        m.getSkinType()))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @GetMapping("/url/sidmool") // sidmool 상품조회 API
    public Result readSidmoolItem(){
        List<ItemDto> collect = itemService.findSiItem()
                .stream()
                .map(m -> new ItemDto(m.getId(),
                        m.getName(),
                        m.getPrice(),
                        m.getPriceSign(),
                        m.getBrand(),
                        m.getImageLink(),
                        m.getProductLink(),
                        m.getWebsiteLink(),
                        m.getItemFeature(),
                        m.getSkinType()))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @GetMapping("/url/beplain") // beplain 상품조회 API
    public Result readBeplainItem(){
        List<ItemDto> collect = itemService.findBeItem()
                .stream()
                .map(m -> new ItemDto(m.getId(),
                        m.getName(),
                        m.getPrice(),
                        m.getPriceSign(),
                        m.getBrand(),
                        m.getImageLink(),
                        m.getProductLink(),
                        m.getWebsiteLink(),
                        m.getItemFeature(),
                        m.getSkinType()))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @PostMapping("/urlurl") //브랜드와 스킨타입에 따른 조회 API
    public Result readForSkinType(@RequestBody ReadItemSkinTypeRequest readItemSkinTypeRequest){
        List<ItemDto> collect = itemService.findSkinTypeItem(readItemSkinTypeRequest.getBrand(),
                readItemSkinTypeRequest.getSkinType())
                .stream()
                .map(m -> new ItemDto(m.getId(),
                        m.getName(),
                        m.getPrice(),
                        m.getPriceSign(),
                        m.getBrand(),
                        m.getImageLink(),
                        m.getProductLink(),
                        m.getWebsiteLink(),
                        m.getItemFeature(),
                        m.getSkinType()))
                .collect(Collectors.toList());

        return new Result(collect);
    }

    @Data
    @AllArgsConstructor
    static class Result<T> { //API 확장성을 위해서 한번 감싸기위한 class
        private T data;
    }
}

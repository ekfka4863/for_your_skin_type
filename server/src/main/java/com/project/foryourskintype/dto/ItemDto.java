package com.project.foryourskintype.dto;

import com.project.foryourskintype.domain.ItemFeature;
import com.project.foryourskintype.domain.SkinType;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@AllArgsConstructor
public class ItemDto {

    private Long id;
    private String name;
    private String price;
    private String priceSign;
    private String brand;
    private String imageLink;
    private String productLink;
    private String websiteLink;
    private ItemFeature itemFeature;
    private SkinType skinType;

}

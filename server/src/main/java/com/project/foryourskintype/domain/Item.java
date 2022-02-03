package com.project.foryourskintype.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import static com.project.foryourskintype.domain.ItemFeature.오일형;
import static com.project.foryourskintype.domain.SkinType.복합성;

@Entity
@Getter @Setter
public class Item {
    @Id @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private String price;
    private String priceSign;
    private String brand;
    private String imageLink;
    private String productLink;
    private String websiteLink;

    @Enumerated(EnumType.STRING)
    private ItemFeature itemFeature;
    @Enumerated(EnumType.STRING)
    private SkinType skinType;

    public Item(String name,
                String price,
                String priceSign,
                String brand,
                String imageLink,
                String productLink,
                String websiteLink,
                ItemFeature itemFeature,
                SkinType skinType) {
        this.name = name;
        this.price = price;
        this.priceSign = priceSign;
        this.brand = brand;
        this.imageLink = imageLink;
        this.productLink = productLink;
        this.websiteLink = websiteLink;
        this.itemFeature = itemFeature;
        this.skinType = skinType;
    }
    public static Item createNullItem(){
        return new Item("", "", "", "",
                "", "", "", 오일형, 복합성);
    }

    protected Item(){}

}

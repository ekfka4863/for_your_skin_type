package com.project.foryourskintype.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class LikedItem {
    @Id @GeneratedValue
    @Column(name = "likeditem_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    //생성 메서드
    public static LikedItem createLikedItem(Item item, Member member){
        LikedItem likedItem = new LikedItem();
        likedItem.setItem(item);
        likedItem.setMember(member);
        member.getLikedItems().add(likedItem);

        return likedItem;
    }
}

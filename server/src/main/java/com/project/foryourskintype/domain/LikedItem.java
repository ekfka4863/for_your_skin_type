package com.project.foryourskintype.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
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
}

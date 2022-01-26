package com.project.foryourskintype.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
public class Member {
    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;
    private String name;
    private int age;
    private String gender;
    private String email;
    private String password;
    private String phoneNumber;

    @OneToMany(mappedBy = "member")
    private List<LikedItem> likedItems;
}

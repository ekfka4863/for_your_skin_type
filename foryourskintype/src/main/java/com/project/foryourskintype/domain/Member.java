package com.project.foryourskintype.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
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
    private List<LikedItem> likedItems = new ArrayList<>();
}

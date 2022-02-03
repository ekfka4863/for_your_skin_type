package com.project.foryourskintype.domain;

import com.project.foryourskintype.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static com.project.foryourskintype.domain.ItemFeature.오일형;
import static com.project.foryourskintype.domain.SkinType.복합성;

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
    @Column(unique = true)
    private String email;
    private String password;
    private String phoneNumber;

    @OneToMany(mappedBy = "member")
    private List<LikedItem> likedItems = new ArrayList<>();

    public Member(String name, int age, String gender, String email, String password, String phoneNumber) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    public Member(Long id, String name, int age, String gender, String email, String password, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    public static Member createNullMember(){
        return new Member("", 0, "", "",
                "", "");
    }

    protected Member(){}

}

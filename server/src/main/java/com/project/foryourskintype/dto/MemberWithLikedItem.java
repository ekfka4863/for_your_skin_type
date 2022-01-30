package com.project.foryourskintype.dto;

import com.project.foryourskintype.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberWithLikedItem {
    private Long id;
    private String name;
    private int age;
    private String gender;
    private String email;
    private String password;
    private String phoneNumber;
    private List<LikedItemDto> likedItems = new ArrayList<>();

    public MemberWithLikedItem(Member member) {
        this.id = member.getId();
        this.name = member.getName();
        this.age = member.getAge();
        this.gender = member.getGender();
        this.email = member.getEmail();
        this.password = member.getPassword();
        this.phoneNumber = member.getPhoneNumber();
        this.likedItems = member.getLikedItems()
                .stream()
                .map(l -> new LikedItemDto(l))
        .collect(Collectors.toList());
    }
}

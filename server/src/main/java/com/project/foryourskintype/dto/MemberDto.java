package com.project.foryourskintype.dto;

import com.project.foryourskintype.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {
    private Long id;
    @NotEmpty @Size(min = 2, message = "이름은 두 글자 이상 입력해야 합니다.")
    private String name;
    private int age;
    private String gender;
    @NotEmpty(message = "아이디는 필수 기재 사항입니다.")
    private String email;
    @NotEmpty(message = "비밀번호는 필수 기재 사항입니다.")
    private String password;
    private String phoneNumber;

    public MemberDto(Member member) {
        this.id = member.getId();
        this.name = member.getName();
        this.age = member.getAge();
        this.gender = member.getGender();
        this.email = member.getEmail();
        this.password = member.getPassword();
        this.phoneNumber = member.getPhoneNumber();
    }
}

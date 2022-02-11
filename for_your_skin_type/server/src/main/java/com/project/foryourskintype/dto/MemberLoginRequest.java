package com.project.foryourskintype.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberLoginRequest {
    //클라이언트랑 변수 맞춘것일뿐 Email, Password라고 보면됨
    String userId;
    String userPwLogin;
}

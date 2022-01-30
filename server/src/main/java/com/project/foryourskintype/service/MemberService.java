package com.project.foryourskintype.service;
import com.project.foryourskintype.domain.Member;

import javax.servlet.http.HttpServletRequest;

public interface MemberService {
    Long join(Member member);
    int Login(String email, String password, HttpServletRequest request);
}
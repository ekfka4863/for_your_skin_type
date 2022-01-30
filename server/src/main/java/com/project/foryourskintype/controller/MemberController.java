package com.project.foryourskintype.controller;

import com.project.foryourskintype.domain.Member;
import com.project.foryourskintype.dto.MemberDto;
import com.project.foryourskintype.dto.MemberLoginRequest;
import com.project.foryourskintype.dto.MemberLoginResponse;
import com.project.foryourskintype.dto.Result;
import com.project.foryourskintype.repository.MemberRepository;
import com.project.foryourskintype.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Transactional
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private final MemberRepository memberRepository;
    private final MemberService memberService;

    @GetMapping("members")
    public Result readAll(){
        List<MemberDto> collect = memberRepository.findAll()
                .stream()
                .map(m -> new MemberDto(m))
                .collect(Collectors.toList());

        return new Result(collect);
    }


    @PostMapping("signup")
    public Long join(@RequestBody @Valid MemberDto memberDto, Errors errors){
        if(errors.hasErrors()){
            return null;
        }
        return memberService.join(new Member(memberDto.getId(),
                memberDto.getName(),
                memberDto.getAge(),
                memberDto.getGender(),
                memberDto.getEmail(),
                memberDto.getPassword(),
                memberDto.getPhoneNumber()));
    }


    @PostMapping("login")
    public Result login(@RequestBody MemberLoginRequest memberLoginRequest, HttpServletRequest request){
        //클라이언트랑 변수 맞춘것 Email, Password라고 보면됨
        int loginResult = memberService.Login(memberLoginRequest.getUserId(), memberLoginRequest.getUserPwLogin(), request);
        HttpSession session = request.getSession();
        Member findMember = memberRepository.findByEmail(memberLoginRequest.getUserId()).get();

        return new Result(new MemberLoginResponse(findMember,
                session.getAttribute(memberLoginRequest.getUserId()).toString()));
    }
}
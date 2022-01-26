package com.project.foryourskintype.dto;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LikedItemDto {
    private Long id;
    private Item item;
    private Member member;
}

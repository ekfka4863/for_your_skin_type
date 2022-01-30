package com.project.foryourskintype.dto;

import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LikedItemSaveRequest {
    private Long id;
    private Item item;
    private Member member;
}

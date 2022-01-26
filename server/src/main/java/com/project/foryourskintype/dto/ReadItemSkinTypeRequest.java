package com.project.foryourskintype.dto;

import com.project.foryourskintype.domain.SkinType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReadItemSkinTypeRequest {
    private Long id;
    private SkinType skinType;
}

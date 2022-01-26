package com.project.foryourskintype.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReadItemBrandRequest {
    private Long id;
    private String brand;
}

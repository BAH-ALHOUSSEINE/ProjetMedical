package com.example.demo.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PatientDto {
    private Long id;
    private String matricule;
    private String nom;
    private String email;
    private String prenom;

}

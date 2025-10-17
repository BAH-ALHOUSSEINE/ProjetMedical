package com.example.demo.dto;

import java.sql.Date;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MedecinDto {

    private String matricule;
    private String nom;
    private String prenom;
    private String specialiste;
    private String email;
    private Date dateNaissance;
    private String password;

}

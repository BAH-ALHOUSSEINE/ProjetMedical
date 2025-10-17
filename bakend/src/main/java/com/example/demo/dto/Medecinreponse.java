package com.example.demo.dto;

import java.util.Optional;

import com.example.demo.Entity.Medecin;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Medecinreponse {

    private String message;
    private MedecinDto medecin;

}

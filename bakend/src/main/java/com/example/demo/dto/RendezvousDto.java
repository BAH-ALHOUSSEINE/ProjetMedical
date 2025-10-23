package com.example.demo.dto;

import java.util.Date;

import com.example.demo.Entity.Etat;
import com.example.demo.Entity.Medecin;
import com.example.demo.Entity.Patient;

import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
public class RendezvousDto {

    private Date date;
    private String heure;
    private Etat status;
    private Patient patient;
    private String medecin;
    private Long idmedecin;
    private Long idpatient;
    private Long id;

}

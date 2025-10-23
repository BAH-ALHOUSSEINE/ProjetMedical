package com.example.demo.dto;

import java.util.Date;

import com.example.demo.Entity.Medecin;
import com.example.demo.Entity.Patient;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Consultationdto {

    Long id;
    String prescription;
    String diagnostique;
    String patientmatricule;
    String medecinmatricule;
    Date dateconsultation;

}

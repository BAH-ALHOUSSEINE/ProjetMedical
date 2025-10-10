package com.example.demo.dto;

import java.util.Optional;

import com.example.demo.Entity.Patient;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Patientreponse {

    private String message;
    private Optional<Patient> patient;
}

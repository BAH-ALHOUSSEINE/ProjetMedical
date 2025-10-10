package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Consultation;
import com.example.demo.Repersitory.Consultationrepository;
import com.example.demo.dto.Consultationreponse;

@Service
public class ServiceConsultation {

    @Autowired
    private Consultationrepository consultationrepository;

    public ResponseEntity<Consultationreponse> addconsultation(Consultation consultation) {

        try {
            consultationrepository.save(consultation);
            return ResponseEntity.ok(
                    Consultationreponse.builder().message("consultation ajouté avec succes").build());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    Consultationreponse.builder().message("echec lors de l'ajout de la consultation").build());
        }
    }

}

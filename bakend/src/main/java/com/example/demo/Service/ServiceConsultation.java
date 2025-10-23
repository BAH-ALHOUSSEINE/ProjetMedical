package com.example.demo.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Consultation;
import com.example.demo.Repersitory.Consultationrepository;
import com.example.demo.dto.Consultationdto;
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

    public List<Consultationdto> ConsultationPatient(String matricule) {

        List<Consultation> consultations = consultationrepository.findByPatientMatricule(matricule).get();

        List<Consultationdto> consultationdtos = consultations.stream().map(this::convertConsultationtoDtoConsurlation)
                .collect(Collectors.toList());
        return consultationdtos;
    }

    public Consultationdto convertConsultationtoDtoConsurlation(Consultation consulation) {

        Consultationdto consultationdto = new Consultationdto();

        consultationdto.setId(consulation.getId());
        consultationdto.setPrescription(consulation.getPrescription());
        consultationdto.setDiagnostique(consulation.getDiagnostique());
        consultationdto.setDateconsultation(consulation.getDateconsulataion());
        return consultationdto;
    }

}

package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Patient;
import com.example.demo.Repersitory.Patientrepository;
import com.example.demo.dto.PatientDto;
import com.example.demo.dto.Patientreponse;

@Service
public class Servicepatient {

    @Autowired
    private Patientrepository patientrepository;

    public ResponseEntity<Patientreponse> addPatient(Patient patient) {

        if (patientrepository.findByEmail(patient.getEmail()).isPresent()) {

            return ResponseEntity.badRequest().body(
                    Patientreponse.builder().message("Attent ce patient existe deja").build());
        }
        patientrepository.save(patient);
        return ResponseEntity.ok().body(Patientreponse.builder()
                .message("patient ajouté avec succes").build());
    }

    public ResponseEntity<Patientreponse> connexion(Patient patient) {

        if (patientrepository.findByEmail(patient.getEmail()).isPresent()) {
            Optional<Patient> patient2 = patientrepository.findByEmail(patient.getEmail());
            if (patient.getPassword().equals(patient2.get().getPassword())) {
                PatientDto patientdto = this.convertPatienttoPatientdto(patient2.get());
                return ResponseEntity.ok(
                        Patientreponse.builder().message("authentification avec succes").patient(patientdto).build());
            }
        }

        return ResponseEntity.badRequest().body(Patientreponse.builder()
                .message("email ou mot de pass incorrect").build());

    }

    public ResponseEntity<Patientreponse> getByMatricule(String matricule) {

        try {

            Optional<Patient> patient = patientrepository.findByMatricule(matricule);
            PatientDto patientdto = this.convertPatienttoPatientdto(patient.get());
            return ResponseEntity.ok(Patientreponse.builder().patient(patientdto).build());
        } catch (Exception e) {

            return ResponseEntity.badRequest()
                    .body(Patientreponse.builder().message("ce patient n'existe pas").build());
        }

    }

    public PatientDto findpatientbyid(Long id) {

        PatientDto patientdto = new PatientDto();
        patientdto = convertPatienttoPatientdto(patientrepository.findById(id).get());
        return patientdto;
    }

    public PatientDto convertPatienttoPatientdto(Patient patient) {

        PatientDto patientdto = new PatientDto();

        patientdto.setEmail(patient.getEmail());
        patientdto.setMatricule(patient.getMatricule());
        patientdto.setId(patient.getId());
        patientdto.setNom(patient.getNom());
        patientdto.setPrenom(patient.getPrenom());

        return patientdto;

    }

    public ResponseEntity<Patientreponse> editpatient(Long id, Patient patient) {

        try {
            Patient patientedit = patientrepository.findById(id).get();
            if (patient.getEmail() != null) {
                patientedit.setEmail(patient.getEmail());
            }
            if (patient.getNom() != null) {
                patientedit.setNom(patient.getNom());
            }
            if (patient.getPrenom() != null) {
                patientedit.setPrenom(patient.getPrenom());
            }
            patientrepository.save(patientedit);

            return ResponseEntity.ok().body(Patientreponse.builder().message("patient editer avec succes")
                    .patient(convertPatienttoPatientdto(patientedit)).build());
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Patientreponse.builder().message("erreur lors de l'edition" + e.getMessage()).build());
        }
    }

}

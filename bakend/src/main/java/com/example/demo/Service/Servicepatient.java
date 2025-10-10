package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Patient;
import com.example.demo.Repersitory.Patientrepository;
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
                return ResponseEntity.ok(
                        Patientreponse.builder().message("authentification avec succes").patient(patient2).build());
            }
        }

        return ResponseEntity.badRequest().body(Patientreponse.builder()
                .message("email ou mot de pass incorrect").build());

    }

    public ResponseEntity<Patientreponse> getByMatricule(String matricule) {

        try {

            Optional<Patient> patient = patientrepository.findByMatricule(matricule);

            return ResponseEntity.ok(Patientreponse.builder().patient(patient).build());
        } catch (Exception e) {

            return ResponseEntity.badRequest()
                    .body(Patientreponse.builder().message("ce patient n'existe pas").build());
        }

    }

}

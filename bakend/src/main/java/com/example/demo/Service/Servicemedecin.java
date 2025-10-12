package com.example.demo.Service;

import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Medecin;
import com.example.demo.Repersitory.Medecinrepository;
import com.example.demo.dto.Medecinreponse;

@Service
public class Servicemedecin {

    @Autowired
    private Medecinrepository medecinrepository;

    public ResponseEntity<Medecinreponse> addmedecin(Medecin medecin) {

        if (medecinrepository.findByEmail(medecin.getEmail()).isPresent()) {

            return ResponseEntity.badRequest().body(Medecinreponse.builder().message("Ce email existe deja").build());
        } else {

            medecinrepository.save(medecin);

            return ResponseEntity.ok(Medecinreponse.builder().message("Medecin ajouté avec succes").build());
        }
    }

    public ResponseEntity<Medecinreponse> connexionmedecin(Medecin medecin) {

        if (medecinrepository.findByEmail(medecin.getEmail()).isPresent()) {
            java.util.Optional<Medecin> medecin2 = medecinrepository.findByEmail(medecin.getEmail());

            if (medecin2.get().getPassword().equals(medecin.getPassword())) {

                return ResponseEntity
                        .ok(Medecinreponse.builder().message("authentification success").medecin(medecin2).build());
            }

        }

        return ResponseEntity.badRequest().body(Medecinreponse.builder()
                .message("Email ou mot de pass incorrect").build());
    }

    public List<Medecin> findAllMedecin() {
        return medecinrepository.findAll();
    }

    public ResponseEntity<Medecinreponse> finbymatricule(String matricule) {

        try {
            java.util.Optional<Medecin> medecinmatricule = medecinrepository.findByMatricule(matricule);
            return ResponseEntity.ok(Medecinreponse.builder().medecin(medecinmatricule).build());
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Medecinreponse.builder().message("aucun medecin avec ce matricule").build());
        }
    }
}

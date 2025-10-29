package com.example.demo.Service;

import java.lang.classfile.instruction.DiscontinuedInstruction.RetInstruction;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Medecin;
import com.example.demo.Repersitory.Medecinrepository;
import com.example.demo.dto.MedecinDto;
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

            MedecinDto medecinDto = this.convertMedecintoMedecinDto(medecin2.get());

            if (medecin2.get().getPassword().equals(medecin.getPassword())) {

                return ResponseEntity
                        .ok(Medecinreponse.builder().message("authentification success").medecin(medecinDto).build());
            }

        }

        return ResponseEntity.badRequest().body(Medecinreponse.builder()
                .message("Email ou mot de pass incorrect").build());
    }

    public List<MedecinDto> findAllMedecin() {
        List<Medecin> medecins = medecinrepository.findAll();
        List<MedecinDto> medecinDtos = medecins.stream().map(this::convertMedecintoMedecinDto)
                .collect(Collectors.toList());
        return medecinDtos;
    }

    public ResponseEntity<Medecinreponse> finbymatricule(String matricule) {

        try {

            java.util.Optional<Medecin> medecinmatricule = medecinrepository.findByMatricule(matricule);
            MedecinDto medecinDto = this.convertMedecintoMedecinDto(medecinmatricule.get());
            return ResponseEntity.ok(Medecinreponse.builder().medecin(medecinDto).build());
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Medecinreponse.builder().message("aucun medecin avec ce matricule").build());
        }
    }

    public MedecinDto convertMedecintoMedecinDto(Medecin medecin) {

        MedecinDto medecinDto = new MedecinDto();

        medecinDto.setNom(medecin.getNom());
        medecinDto.setPrenom(medecin.getPrenom());
        medecinDto.setEmail(medecin.getEmail());
        medecinDto.setMatricule(medecin.getMatricule());
        medecinDto.setSpecialiste(medecin.getSpecialiste());
        medecinDto.setDateNaissance(medecin.getDateNaissance());
        return medecinDto;
    }

    public ResponseEntity<Medecinreponse> editmedecin(String matricule, Medecin medecin) {

        try {
            Medecin medecinedit = medecinrepository.findByMatricule(matricule).get();

            if (medecin.getEmail() != null) {
                medecinedit.setEmail(medecin.getEmail());
            }
            if (medecin.getNom() != null) {
                medecinedit.setNom(medecin.getNom());
            }
            if (medecin.getPrenom() != null) {
                medecinedit.setPrenom(medecin.getPrenom());
            }
            if (medecin.getSpecialiste() != null) {
                medecinedit.setSpecialiste(medecin.getSpecialiste());
            }

            medecinrepository.save(medecinedit);

            return ResponseEntity.ok(Medecinreponse.builder()
                    .message("medecin edité avec succes").medecin(convertMedecintoMedecinDto(medecinedit)).build());
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Medecinreponse.builder().message("erreur lors de l'edition").build());
        }
    }
}

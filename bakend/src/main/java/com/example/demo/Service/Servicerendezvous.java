package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Medecin;
import com.example.demo.Entity.Rendezvous;
import com.example.demo.Repersitory.Medecinrepository;
import com.example.demo.Repersitory.RendezvousRepository;
import com.example.demo.dto.Rendezvousreponse;

import jakarta.el.ELException;

@Service
public class Servicerendezvous {

    @Autowired
    private RendezvousRepository rendezvousRepository;

    @Autowired
    private Medecinrepository medecinrepository;

    public ResponseEntity<Rendezvousreponse> addrendezvoous(Rendezvous rendezvous) {

        try {

            rendezvousRepository.save(rendezvous);

            return ResponseEntity.ok(Rendezvousreponse.builder().message("rendezvous ajouté avec succes").build());

        } catch (Exception e) {

            return ResponseEntity.badRequest().body(
                    Rendezvousreponse.builder().message("erreur lors de l'ahout du rendez vous").build());

        }
    }

    public List<Rendezvous> medecinrendezvous(String matricule) {

        Medecin medecin = this.medecinrepository.findByMatricule(matricule).get();
        return this.rendezvousRepository.findByMedecin(medecin).get();

    }

}

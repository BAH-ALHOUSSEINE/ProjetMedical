package com.example.demo.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Etat;
import com.example.demo.Entity.Medecin;
import com.example.demo.Entity.Rendezvous;
import com.example.demo.Repersitory.Medecinrepository;
import com.example.demo.Repersitory.RendezvousRepository;
import com.example.demo.dto.RendezvousDto;
import com.example.demo.dto.Rendezvousreponse;

import jakarta.el.ELException;
import jakarta.persistence.EntityNotFoundException;

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

    public List<RendezvousDto> medecinrendezvous(String matricule) {

        return this.rendezvousRepository.findByMedecinMatricule(matricule).get()
                .stream().map(this::convertRendezVousToRendezvousDto).collect(Collectors.toList());

    }

    public void deleterendezvous(Long id) {
        this.rendezvousRepository.deleteById(id);
    }

    public RendezvousDto findRendezvousById(long id) {

        Rendezvous rendezvous = this.rendezvousRepository.findById(id).get();

        RendezvousDto rendezvousDto = this.convertRendezVousToRendezvousDto(rendezvous);
        return rendezvousDto;
    }

    public RendezvousDto convertRendezVousToRendezvousDto(Rendezvous rendezvous) {

        RendezvousDto rendezvousDto = new RendezvousDto();

        rendezvousDto.setDate(rendezvous.getDate());
        rendezvousDto.setHeure(rendezvous.getHeure());
        rendezvousDto.setStatus(rendezvous.getStatus());
        rendezvousDto.setMedecin(rendezvous.getMedecin().getMatricule());
        rendezvousDto.setIdmedecin(rendezvous.getMedecin().getId());
        rendezvousDto.setId(rendezvous.getId());
        if (rendezvous.getPatient() != null) {
            rendezvousDto.setIdpatient(rendezvous.getPatient().getId());
        }

        return rendezvousDto;
    }

    public ResponseEntity<Rendezvousreponse> editrendezvous(Long id, Rendezvous rendezvousbody) {
        Rendezvous rendezvous = rendezvousRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Rendez-vous non trouvé"));

        if (rendezvousbody.getDate() != null) {
            rendezvous.setDate(rendezvousbody.getDate());
        }

        if (rendezvousbody.getHeure() != null) {
            rendezvous.setHeure(rendezvousbody.getHeure());
        }

        if (rendezvousbody.getStatus() != null) {
            rendezvous.setStatus(rendezvousbody.getStatus());
        }

        rendezvousRepository.save(rendezvous);

        return ResponseEntity.ok(Rendezvousreponse.builder().message("rendezvous editez avec sucees").build());

    }

    public ResponseEntity<Rendezvousreponse> takerendrezvous(Long id, Rendezvous rendezvousbody) {
        try {

            Rendezvous rendezvous = rendezvousRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Rendez-vous non trouvé"));

            rendezvous.setPatient(rendezvousbody.getPatient());
            rendezvous.setStatus(Etat.RENEDEZVOUSPRIS);
            rendezvousRepository.save(rendezvous);
            return ResponseEntity.ok(Rendezvousreponse.builder().message("rendezvous pris").build());

        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Rendezvousreponse.builder().message("erreur lors du choix de rendez vous").build());
        }
    }

    public ResponseEntity<Rendezvousreponse> annulerrendezvous(Long id, Rendezvous rendezvousbody) {
        try {

            Rendezvous rendezvous = rendezvousRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Rendez-vous non trouvé"));

            rendezvous.setPatient(null);
            rendezvous.setStatus(rendezvousbody.getStatus());
            rendezvousRepository.save(rendezvous);
            return ResponseEntity.ok(Rendezvousreponse.builder().message("rendezvous annuleravec succes").build());

        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Rendezvousreponse.builder().message("erreur lors de l'nnulation  du rendez vous").build());
        }
    }

    public List<RendezvousDto> patientrrendezvous(String matricule) {

        List<Rendezvous> rendezvouspatient = rendezvousRepository.findByPatientMatricule(matricule).get();

        List<RendezvousDto> rendezvousdto = rendezvouspatient.stream().map(this::convertRendezVousToRendezvousDto)
                .collect(Collectors.toList());

        return rendezvousdto;
    }
}

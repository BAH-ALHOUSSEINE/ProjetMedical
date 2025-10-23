package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.RenderingResponse;

import com.example.demo.Entity.Medecin;
import com.example.demo.Entity.Rendezvous;
import com.example.demo.Repersitory.Medecinrepository;
import com.example.demo.Service.Servicemedecin;
import com.example.demo.Service.Servicerendezvous;
import com.example.demo.dto.RendezvousDto;
import com.example.demo.dto.Rendezvousreponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/rendezvous")
@CrossOrigin

public class RendezvousController {

    @Autowired
    private Servicerendezvous servicerendezvous;
    @Autowired
    private Medecinrepository servicemedecin;

    @PostMapping("/addrendezvous")
    public ResponseEntity<Rendezvousreponse> addrendezvous(@RequestBody Rendezvous rendezvous) {
        Medecin medecin = servicemedecin.findByMatricule(rendezvous.getMedecin().getMatricule()).get();
        rendezvous.setMedecin(medecin);
        return servicerendezvous.addrendezvoous(rendezvous);
    }

    @GetMapping("/medecinrendezvous/{matricule}")
    public List<RendezvousDto> medecinrendezvous(@PathVariable String matricule) {
        return servicerendezvous.medecinrendezvous(matricule);
    }

    @DeleteMapping("/deleterendezvous/{id}")
    public void deleterendezvous(@PathVariable Long id) {
        System.out.println("mon id" + id);
        servicerendezvous.deleterendezvous(id);
    }

    @GetMapping("/findrendezvousbyid/{id}")
    public RendezvousDto findrendezvousById(@PathVariable Long id) {
        return servicerendezvous.findRendezvousById(id);
    }

    @PutMapping("editrendezvous/{id}")
    public ResponseEntity<Rendezvousreponse> editrendezvous(@PathVariable Long id, @RequestBody Rendezvous rendezvous) {
        System.out.println("eeeeeeeeeeeeeeee" + rendezvous);
        return servicerendezvous.editrendezvous(id, rendezvous);
    }

    @PutMapping("takerendrezvous/{id}")
    public ResponseEntity<Rendezvousreponse> takerendrezvous(@PathVariable Long id,
            @RequestBody Rendezvous rendezvous) {

        return servicerendezvous.takerendrezvous(id, rendezvous);
    }

    @PutMapping("annulerrendezvous/{id}")
    public ResponseEntity<Rendezvousreponse> annulerrendezvous(@PathVariable Long id,
            @RequestBody Rendezvous rendezvous) {

        return servicerendezvous.annulerrendezvous(id, rendezvous);
    }

    @GetMapping("patientrendezvous/{matricule}")
    public List<RendezvousDto> patientrrendezvous(@PathVariable String matricule) {
        return servicerendezvous.patientrrendezvous(matricule);
    }

}

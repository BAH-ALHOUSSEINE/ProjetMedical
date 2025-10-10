package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Medecin;
import com.example.demo.Service.Servicemedecin;
import com.example.demo.dto.Medecinreponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/medecin")
@CrossOrigin

public class MedecinController {

    @Autowired
    private Servicemedecin serivemedecin;

    @PostMapping("/addmedecin")
    public ResponseEntity<Medecinreponse> addmedecin(@RequestBody Medecin medecin) {
        return serivemedecin.addmedecin(medecin);
    }

    @PostMapping("/connexion")
    public ResponseEntity<Medecinreponse> connexionmedecin(@RequestBody Medecin medecin) {
        return serivemedecin.connexionmedecin(medecin);
    }

    @GetMapping("/allmedecin")
    public List<Medecin> findAllmedecin() {
        return serivemedecin.findAllMedecin();
    }

}

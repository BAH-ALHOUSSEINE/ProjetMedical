package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PatientDto;
import com.example.demo.dto.Patientreponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Entity.Patient;
import com.example.demo.Service.Servicepatient;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin
@RequestMapping("/patient")

public class PatientController {

    @Autowired
    private Servicepatient servicepatient;

    @PostMapping("/inscription")
    public ResponseEntity<Patientreponse> addpatient(@RequestBody Patient patient) {
        return servicepatient.addPatient(patient);
    }

    @PostMapping("/connexion")
    public ResponseEntity<Patientreponse> connexionpatient(@RequestBody Patient patient) {
        System.out.println("patient email" + patient.getEmail());
        System.out.println("patient Password" + patient.getPassword());
        return servicepatient.connexion(patient);
    }

    @GetMapping("/matricule/{matricule}")
    public ResponseEntity<Patientreponse> getPatientByMatricule(@PathVariable String matricule) {
        return servicepatient.getByMatricule(matricule);
    }

    @GetMapping("/findpatientbyid/{id}")
    public PatientDto findpatientbyid(@PathVariable Long id) {
        return servicepatient.findpatientbyid(id);
    }

    @PutMapping("editpatient/{id}")
    public ResponseEntity<Patientreponse> editpatient(@PathVariable Long id, @RequestBody Patient patient) {
        // TODO: process PUT request

        return servicepatient.editpatient(id, patient);
    }

}

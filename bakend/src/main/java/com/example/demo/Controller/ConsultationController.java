package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Consultation;
import com.example.demo.Service.ServiceConsultation;
import com.example.demo.dto.Consultationreponse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/consultation")
@CrossOrigin
public class ConsultationController {

    @Autowired
    private ServiceConsultation serviceConsultation;

    @PostMapping("/addconsulatation")
    public ResponseEntity<Consultationreponse> addconsultation(@RequestBody Consultation consultation) {

        return serviceConsultation.addconsultation(consultation);
    }

    @GetMapping("/patientconsultation/{matricule}")
    public List<com.example.demo.dto.Consultationdto> patientconsultation(@PathVariable String matricule) {
        return serviceConsultation.ConsultationPatient(matricule);
    }

}

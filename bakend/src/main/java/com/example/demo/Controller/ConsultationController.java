package com.example.demo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Consultation;
import com.example.demo.Service.ServiceConsultation;
import com.example.demo.dto.Consultationreponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/consultation")
public class ConsultationController {

    @Autowired
    private ServiceConsultation serviceConsultation;

    @PostMapping("/addconsulatation")
    public ResponseEntity<Consultationreponse> addconsultation(@RequestBody Consultation consultation) {

        return serviceConsultation.addconsultation(consultation);
    }

}

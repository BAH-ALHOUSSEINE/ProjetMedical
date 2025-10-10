package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.RenderingResponse;

import com.example.demo.Entity.Rendezvous;
import com.example.demo.Service.Servicemedecin;
import com.example.demo.Service.Servicerendezvous;
import com.example.demo.dto.Rendezvousreponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/rendezvous")
@CrossOrigin

public class RendezvousController {

    @Autowired
    private Servicerendezvous servicerendezvous;

    @PostMapping("/addrendezvous")
    public ResponseEntity<Rendezvousreponse> addrendezvous(@RequestBody Rendezvous rendezvous) {
        // TODO: process POST request

        return servicerendezvous.addrendezvoous(rendezvous);
    }

}

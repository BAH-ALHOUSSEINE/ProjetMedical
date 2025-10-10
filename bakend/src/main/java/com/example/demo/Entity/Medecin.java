package com.example.demo.Entity;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Medecin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(unique = true)
    private String matricule;
    private String nom;
    private String prenom;
    private String specialiste;
    private String email;
    private Date dateNaissance;
    private String password;
    @OneToMany(mappedBy = "medecin")
    private List<Rendezvous> rendezvous;
    @OneToMany(mappedBy = "medecin")
    private List<Consultation> consultations;

}

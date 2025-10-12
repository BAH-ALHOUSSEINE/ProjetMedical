package com.example.demo.Repersitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Medecin;
import java.util.List;

public interface Medecinrepository extends JpaRepository<Medecin, Long> {

    Optional<Medecin> findByEmail(String email);

    Optional<Medecin> findByPassword(String password);

    Optional<Medecin> findById(Long id);

    Optional<Medecin> findByMatricule(String matricule);

}

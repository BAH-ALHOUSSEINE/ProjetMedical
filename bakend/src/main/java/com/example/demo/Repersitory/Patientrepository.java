package com.example.demo.Repersitory;

import java.util.Locale.Category;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Patient;
import java.util.List;

public interface Patientrepository extends JpaRepository<Patient, Long> {

    Optional<Patient> findByEmail(String email);

    Optional<Patient> findByPassword(String password);

    Optional<Patient> findByMatricule(String matricule);

}

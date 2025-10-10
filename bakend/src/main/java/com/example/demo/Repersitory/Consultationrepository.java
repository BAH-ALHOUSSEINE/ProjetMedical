package com.example.demo.Repersitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Consultation;

@Repository

public interface Consultationrepository extends JpaRepository<Consultation, Long> {

    

}

package com.example.demo.Repersitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Medecin;
import com.example.demo.Entity.Rendezvous;
import java.util.List;

public interface RendezvousRepository extends JpaRepository<Rendezvous, Long> {

    Optional<List<Rendezvous>> findByMedecin(Medecin medecin);
}

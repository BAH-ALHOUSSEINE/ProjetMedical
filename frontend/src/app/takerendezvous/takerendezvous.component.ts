import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { error } from 'console';
@Component({
  selector: 'app-takerendezvous',
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './takerendezvous.component.html',
  styleUrl: './takerendezvous.component.css'
})
export class TakerendezvousComponent implements OnInit {

  constructor(private servicemedecin: MedecinService) {

  }
  listemedecin !: Medecin[];
  ngOnInit(): void {
    this.servicemedecin.Allmedecin().subscribe({
      next: (data) => {
        this.listemedecin = data;
      },
      error: (error) => {

      }
    });
  }

  choisirmedecin(matricule: String) {
    alert("matricule " + matricule);
  }






}

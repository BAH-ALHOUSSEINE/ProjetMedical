import { Component, OnInit } from '@angular/core';
import { AuthPatientService } from '../services/auth-patient.service';
import { RendezvousComponent } from '../rendezvous/rendezvous.component';
import { Patient } from '../models/patient.model';
import { RendezvousService } from '../services/rendezvous.service';
import { error } from 'console';
import { Rendezvous } from '../models/rendezvous.model';
import { MatIconModule } from "@angular/material/icon";
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-rendezvouspatient',
  imports: [MatIconModule, DatePipe, MatTableModule, DatePipe],
  templateUrl: './rendezvouspatient.component.html',
  styleUrl: './rendezvouspatient.component.css'
})
export class RendezvouspatientComponent implements OnInit {
  infospatient(arg0: any) {
    throw new Error('Method not implemented.');
  }


  constructor(private patientauth: AuthPatientService, private rendezvousservice: RendezvousService) { }
  patientconnecte: Patient | null = null;
  patientrendezvous !: Rendezvous[];
  ngOnInit(): void {
    this.patientconnecte = this.patientauth.getCurrentPatient();

    this.rendezvousservice.patientrendezvous(this.patientconnecte?.matricule).subscribe({

      next: (data) => {
        this.patientrendezvous = data;
      },

      error: (error) => {

      }
    });
  }
  deleterendezvous(id: Number) {
    const rendezvous: Rendezvous = new Rendezvous();
    rendezvous.status = "RENDEZVOUSNONPRIS";
    this.rendezvousservice.annulerrendezvous(id, rendezvous).subscribe({

      next: (data) => {
        alert("rendez vous supprimé avec succes");
        this.patientrendezvous = this.patientrendezvous.filter(rendezvous => rendezvous.id !== id);
      },
      error: (error) => {
        alert("error lors de la suppression de rendezvous");
      }

    });

  }

  displayedColumns: string[] = ['date', 'heure', 'annulé'];




}

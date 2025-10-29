import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AuthMedecinService } from '../services/auth-medecin.service';
import { Medecin } from '../models/medecin.model';
import { RendezvousService } from '../services/rendezvous.service';
import { Rendezvous } from '../models/rendezvous.model';
import { DatePipe } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { data } from 'jquery';
import { error } from 'console';
import { Patient } from '../models/patient.model';
import { MatDialog } from '@angular/material/dialog';
import { PatientdetailComponent } from '../patientdetail/patientdetail.component';
import { ConsultationComponent } from '../consultation/consultation.component';
@Component({
  selector: 'app-rendezvous',
  imports: [MatTableModule, DatePipe, MatIconModule],
  templateUrl: './rendezvous.component.html',
  styleUrl: './rendezvous.component.css'
})

export class RendezvousComponent implements OnInit {





  constructor(private authmedecin: AuthMedecinService,
    private rendezvousservice: RendezvousService, private router: Router,
    private patientservice: PatientService, private matDialog: MatDialog) {

  }
  medecinconnecte: Medecin | null = null;
  medecinrendezvous!: Rendezvous[];
  test !: boolean;
  patient !: Patient;


  ngOnInit(): void {

    this.medecinrendezvouslist();

  }

  medecinrendezvouslist() {
    this.medecinconnecte = this.authmedecin.getCurrentMedecin();
    let matricule: String | undefined = this.medecinconnecte?.matricule;
    this.rendezvousservice.listemedecinrendezvous(this.medecinconnecte?.matricule).subscribe({

      next: (data) => {

        this.medecinrendezvous = data;
        console.log(data);


      },
      error: (error) => {

      }
    });
  }

  deleterendezvous(id: Number) {
    this.test = confirm("voulez vous surpprimer le renez vous");
    if (this.test) {
      alert(id);
      this.rendezvousservice.deleterendezvous(id).subscribe({
        next: (data) => {
          this.medecinrendezvous = this.medecinrendezvous.filter(rendezvous => rendezvous.id !== id);
        },
        error: (data) => {
          alert("erreur");
        }
      });
    }
  }

  editrendezvous(id: Number) {

    this.router.navigate(["dashbord/editrendezvous/" + id]);

  }


  infospatient(patientid: Number) {

    this.patientservice.findByid(patientid).subscribe({
      next: (data) => {
        this.patient = data;
        this.matDialog.open(PatientdetailComponent, {
          width: '400px',
          data: this.patient
        });

      },
      error: (error) => {

      }
    })
  }
  addconsulattion(id: Number) {


    this.matDialog.open(ConsultationComponent, {
      width: '600px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      data: {
        patient: this.patient,
        idrendezvous: id   // ✅ passe-le ici à l’intérieur de "data"
      }
    });


  }


  displayedColumns: string[] = ['date', 'heure', 'status', 'supprimer', 'modifié', 'patient', 'consultation'];

}

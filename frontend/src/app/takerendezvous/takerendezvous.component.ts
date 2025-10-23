import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { Rendezvous } from '../models/rendezvous.model';
import { RendezvousService } from '../services/rendezvous.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { AuthPatientService } from '../services/auth-patient.service';
import { PatientService } from '../services/patient.service';
import { data } from 'jquery';
import { error } from 'console';

@Component({
  selector: 'app-takerendezvous',
  imports: [MatSelectModule, MatFormFieldModule, MatTableModule, DatePipe],
  templateUrl: './takerendezvous.component.html',
  styleUrls: ['./takerendezvous.component.css']
})
export class TakerendezvousComponent implements OnInit {


  constructor(private servicemedecin: MedecinService, private servicerendezvous: RendezvousService,
    private authpatientserice: AuthPatientService, private patientservice: PatientService) { }

  // Colonnes à afficher dans la table
  displayedColumns: string[] = ['date', 'heure', 'choisir'];

  // Données de la table
  dataSource!: MatTableDataSource<Rendezvous>;
  listemedecin!: Medecin[];
  listerendezvousmedecin!: Rendezvous[];
  listenull!: boolean;
  id: any;
  reponse !: boolean;
  matricule !: String;

  ngOnInit(): void {
    this.servicemedecin.Allmedecin().subscribe({
      next: (data) => {
        this.listemedecin = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  // Récupérer les rendez-vous du médecin
  medecinrendezvous(matricule: String): void {
    this.matricule = matricule;
    this.servicerendezvous.listemedecinrendezvous(matricule).subscribe({
      next: (data) => {
        if (data.length == 0) {
          this.listenull = true;
        } else {
          this.listenull = false;
          this.dataSource = new MatTableDataSource(data);
        }
        this.listerendezvousmedecin = data;
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  prendrerendezvous(id: Number) {

    this.reponse = confirm("vouslez vous prendre un rendez vous");

    if (this.reponse) {
      const rendezvous: Rendezvous = new Rendezvous();
      this.id = this.authpatientserice.getCurrentPatient()?.id;
      alert(this.id);
      this.patientservice.findByid(this.id).subscribe({

        next: (data) => {

          rendezvous.patient = data;
          this.servicerendezvous.takerendezvous(id, rendezvous).subscribe({

            next: (data) => {
              alert(data.message);
              this.medecinrendezvous(this.matricule);
            },
            error: (error) => {
              alert(error.message);
            }
          });

        },
        error: (error) => {

        }
      });
    }
  }


  annulerrendezvous(id: Number) {

    this.reponse = confirm("vouslez d'annuler le rendez vous");

    if (this.reponse) {

      this.id = this.authpatientserice.getCurrentPatient()?.id;

      const rendezvous: Rendezvous = new Rendezvous();
      rendezvous.status = "RENDEZVOUSNONPRIS";
      this.servicerendezvous.annulerrendezvous(id, rendezvous).subscribe({

        next: (data) => {
          alert(data.message);
          this.medecinrendezvous(this.matricule);
        },
        error: (error) => {
          alert(error.message);
        }
      });


    }
  }

}

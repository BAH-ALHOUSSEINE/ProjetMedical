import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { Rendezvous } from '../models/rendezvous.model';
import { RendezvousService } from '../services/rendezvous.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-takerendezvous',
  imports: [MatSelectModule, MatFormFieldModule, MatTableModule, DatePipe],
  templateUrl: './takerendezvous.component.html',
  styleUrls: ['./takerendezvous.component.css']
})
export class TakerendezvousComponent implements OnInit {

  constructor(private servicemedecin: MedecinService, private servicerendezvous: RendezvousService) { }

  // Colonnes à afficher dans la table
  displayedColumns: string[] = ['date', 'heure', 'status', 'choisir'];

  // Données de la table
  dataSource!: MatTableDataSource<Rendezvous>;
  listemedecin!: Medecin[];
  listerendezvousmedecin!: Rendezvous[];
  listenull!: boolean;

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
}

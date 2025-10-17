import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AuthMedecinService } from '../services/auth-medecin.service';
import { Medecin } from '../models/medecin.model';
import { RendezvousService } from '../services/rendezvous.service';
import { Rendezvous } from '../models/rendezvous.model';
import { DatePipe } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { Router } from '@angular/router';
@Component({
  selector: 'app-rendezvous',
  imports: [MatTableModule, DatePipe, MatIconModule],
  templateUrl: './rendezvous.component.html',
  styleUrl: './rendezvous.component.css'
})

export class RendezvousComponent implements OnInit {




  constructor(private authmedecin: AuthMedecinService, private rendezvousservice: RendezvousService, private router: Router) {

  }
  medecinconnecte: Medecin | null = null;
  medecinrendezvous!: Rendezvous[];
  test !: boolean;
  ngOnInit(): void {
    this.medecinconnecte = this.authmedecin.getCurrentMedecin();
    let matricule: String | undefined = this.medecinconnecte?.matricule;
    this.rendezvousservice.listemedecinrendezvous("MED-2020-12-12-ALHOUSSEINE").subscribe({

      next: (data) => {

        this.medecinrendezvous = data;


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

  redirect(id: Number) {
    alert(id);
    this.router.navigate(["dashbord/editrendezvous/" + id]);

  }


  displayedColumns: string[] = ['date', 'heure', 'status', 'supprimer', 'modifié'];

}

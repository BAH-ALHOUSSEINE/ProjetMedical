import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { AuthMedecinService } from '../services/auth-medecin.service';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { Rendezvous } from '../models/rendezvous.model';
import { RendezvousService } from '../services/rendezvous.service';
import { error } from 'console';
@Component({
  selector: 'app-addrendezvous',
  imports: [MatInputModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './addrendezvous.component.html',
  styleUrl: './addrendezvous.component.css'
})
export class AddrendezvousComponent implements OnInit {


  constructor(private fb: FormBuilder, private authmedecin: AuthMedecinService, private servicerendezvous: RendezvousService) {

  }

  rendezvousform !: FormGroup;
  medecinconnecte: any;
  ngOnInit(): void {

    this.rendezvousform = this.fb.group({
      daterendezvous: ['', [Validators.required]],
      heureendezvous: ['', [Validators.required]]
    });

  }

  onaddmedecinSubmit() {
    this.medecinconnecte = this.authmedecin.getCurrentMedecin();
    const date: Date = this.rendezvousform.value.daterendezvous;
    const rendezvous: Rendezvous = new Rendezvous();
    alert(this.medecinconnecte.matricule);
    rendezvous.date = date;

    rendezvous.status = "Encours"
    rendezvous.heure = this.rendezvousform.value.heureendezvous;
    rendezvous.medecin = this.medecinconnecte;
    this.servicerendezvous.addrendezvous(rendezvous).subscribe({

      next: (data) => {

        alert("rendezvous ajouté avec success");

      },
      error: (error) => {
        alert("erreur lors de l'ajout du rendez vous ");
      }

    });


  }

}

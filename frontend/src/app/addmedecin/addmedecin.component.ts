import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { error } from 'console';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-addmedecin',
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './addmedecin.component.html',
  styleUrl: './addmedecin.component.css'
})
export class AddmedecinComponent implements OnInit {


  formaddmedecin!: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private medecinservice: MedecinService,
    private dialogRef: MatDialogRef<AddmedecinComponent>,
    private snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
    this.formaddmedecin = this.formbuilder.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateNaissance: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onaddmedecinSubmit() {
    alert("bonjour")
    if (this.formaddmedecin.valid) {
      const medecin: Medecin = new Medecin();

      medecin.prenom = this.formaddmedecin.value.prenom;
      medecin.nom = this.formaddmedecin.value.nom;
      medecin.specialiste = this.formaddmedecin.value.specialite;
      medecin.email = this.formaddmedecin.value.email;
      medecin.dateNaissance = this.formaddmedecin.value.dateNaissance;
      medecin.password = this.formaddmedecin.value.password;
      const code: string = "MED-" + medecin.dateNaissance + "-" + medecin.prenom;
      medecin.matricule = code;

      this.medecinservice.addmedecin(medecin).subscribe({
        next: (date) => {
          this.snackBar.open('Patient ajouté avec succèss ', 'Fermer', {
            duration: 10000, // durée en ms
            verticalPosition: 'top', // ou 'bottom'
            horizontalPosition: 'center',
            panelClass: ['snackbar-success'] // optionnel pour un style personnalisé
          });

        },
        error: (error) => {

          alert("erreur lors de l'ajout de du medecin");
        }

      });
    }
  }



}

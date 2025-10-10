
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthPatientService } from '../services/auth-patient.service';

@Component({
  selector: 'app-connexion',
  standalone: true, // ✅ si tu es en standalone (Angular 15+)
  imports: [
    ReactiveFormsModule, // ✅ obligatoire pour utiliser formGroup
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],



  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {


  forminscription!: FormGroup;

  constructor(private fb: FormBuilder,
    private patientservice: PatientService, private router: Router,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<InscriptionComponent>, private authpatientservie: AuthPatientService) {

  }
  ngOnInit(): void {
    this.forminscription = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      datedenaissance: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordidentique: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.forminscription.valid) {

      if (this.forminscription.value.password != this.forminscription.value.passwordidentique) {
        alert("les deux mots de passe ne correspondent pas");
      }
      else {
        const patient: Patient = new Patient();
        patient.nom = this.forminscription.value.nom;
        patient.prenom = this.forminscription.value.prenom;
        patient.email = this.forminscription.value.email;
        patient.dateNaissance = this.forminscription.value.datedenaissance;
        patient.password = this.forminscription.value.password;
        patient.matricule = `Mat-${patient.dateNaissance}-${patient.nom}`;

        this.patientservice.addPatient(patient).subscribe({
          next: (data) => {
            console.log('Patient ajouté avec succès :', data);
            this.snackBar.open('Patient ajouté avec succèss ', 'Fermer', {
              duration: 10000, // durée en ms
              verticalPosition: 'top', // ou 'bottom'
              horizontalPosition: 'center',
              panelClass: ['snackbar-success'] // optionnel pour un style personnalisé
            });
            this.dialogRef.close('success');
            this.authpatientservie.setCurrentPatient(patient);
            this.router.navigate([`dashbord`]);

          },
          error: (err) => {
            console.error('Erreur lors de l’ajout du patient :', err);
          }
        });





      }

    }
    else {
      alert("veillez remplir tous les donnée correctement");
    }
  }


}

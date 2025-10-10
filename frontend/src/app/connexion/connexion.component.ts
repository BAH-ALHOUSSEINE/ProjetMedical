import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PatientService } from '../services/patient.service';
import { AuthPatientService } from '../services/auth-patient.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formconnexion!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private authPatientService: AuthPatientService,
    private router: Router,
    private medecinService: MedecinService,
    private dialogRef: MatDialogRef<ConnexionComponent>
  ) { }

  ngOnInit(): void {
    this.formconnexion = this.fb.group({
      status: ['patient', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.formconnexion.valid) {
      alert('Formulaire invalide !');
      return;
    }

    const { status, email, password } = this.formconnexion.value;

    if (status === 'patient') {
      this.patientService.connexionPatient(email, password).subscribe({
        next: (data) => {
          this.authPatientService.setCurrentPatient(data.patient);
          console.log(' Patient connecté :', data);
          this.dialogRef.close();
          this.router.navigate(['/dashbord']);
        },
        error: (error) => {
          console.error(error);
          alert('Email ou mot de passe incorrect.');
        }
      });
    } else if (status === 'medecin') {
      this.medecinService.connexionMedecin(email, password).subscribe({
        next: (data) => {
          console.log(' Médecin connecté :', data);
          alert('Médecin connecté avec succès.');
          this.dialogRef.close();
          this.router.navigate(['/dashbord']);
        },
        error: (error) => {
          console.error(error);
          alert('Email ou mot de passe incorrect.');
        }
      });
    }
  }
}

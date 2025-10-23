import { Component, Inject } from '@angular/core';
import { MatDialogContent, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Patient } from '../models/patient.model';
import { Router, RouterLink } from "@angular/router";
@Component({
  selector: 'app-patientdetail',
  imports: [MatDialogContent, MatDialogModule, RouterLink],
  templateUrl: './patientdetail.component.html',
  styleUrl: './patientdetail.component.css'
})
export class PatientdetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Patient, private router: Router, private dialogRef: MatDialogRef<PatientdetailComponent>) { }


  redirect(matricule: String) {
    this.dialogRef.close();
    this.router.navigate(["dashbord/historiqueconsultation/" + matricule]);

  }
}


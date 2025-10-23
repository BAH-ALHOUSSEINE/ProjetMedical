import { Component, Inject, OnInit } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Consulation } from '../models/consulation.model';
import { ConsurlationService } from '../services/consurlation.service';
import { data } from 'jquery';
import { error } from 'console';
import { AuthPatientService } from '../services/auth-patient.service';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient.model';
import { Medecin } from '../models/medecin.model';
import { AuthMedecinService } from '../services/auth-medecin.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RendezvousService } from '../services/rendezvous.service';
import { Rendezvous } from '../models/rendezvous.model';

@Component({
  selector: 'app-consultation',
  imports: [MatInputModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    ReactiveFormsModule],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent implements OnInit {

  formconsultation !: FormGroup;
  constructor(private formbuilder: FormBuilder, private serviceconsultation: ConsurlationService,
    private authpatient: AuthPatientService, private authmedecin: AuthMedecinService,
    private servicepatient: PatientService, @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router, private dialogRef: MatDialogRef<ConsultationComponent>,
    private rendezvous: RendezvousService, private rendezvousservice: RendezvousService
  ) {

  }
  patientconnecte: Patient | null = null;
  medecinconnecte: Medecin | null = null;
  id !: any;

  ngOnInit(): void {
    this.patientconnecte = this.authpatient.getCurrentPatient();
    this.medecinconnecte = this.authmedecin.getCurrentMedecin();
    this.formconsultation = this.formbuilder.group({
      dateconsultation: ['', [Validators.required]],
      diagnostique: ['', [Validators.required]],
      prescription: ['', [Validators.required]]
    })
  }

  addconsultation() {

    const consultation: Consulation = new Consulation();
    consultation.dateconsulataion = this.formconsultation.value.dateconsultation;
    consultation.diagnostique = this.formconsultation.value.diagnostique;
    consultation.prescription = this.formconsultation.value.prescription;
    consultation.patient = this.data.patient;
    this.serviceconsultation.addconsultation(consultation).subscribe({

      next: (data) => {

        alert("consultation reussi avec succes" + data);
        const rendezvous: Rendezvous = new Rendezvous();
        rendezvous.status = "TERMINE";

        this.rendezvousservice.editrendezvous(this.data.idrendezvous, rendezvous).subscribe({

          next: (data) => {

          },
          error: (error) => {

          }
        })

        alert(this.data.idrendezvous);
        this.dialogRef.close();
      },
      error: (error) => {
        alert("error lors de la consultation" + error.message);
      }
    });


  }



}

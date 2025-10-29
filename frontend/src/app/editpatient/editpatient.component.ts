import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { data } from 'jquery';
import { error } from 'console';
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInput, MatInputModule } from '@angular/material/input';
import { Patient } from '../models/patient.model';
import { AuthPatientService } from '../services/auth-patient.service';

@Component({
  selector: 'app-editpatient',
  imports: [MatInputModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule],
  templateUrl: './editpatient.component.html',
  styleUrl: './editpatient.component.css'
})
export class EditpatientComponent implements OnInit {


  constructor(private router: ActivatedRoute, private formpatient: FormBuilder,
    private servicepatient: PatientService, private routers: Router, private authpatient: AuthPatientService) {

  }

  formpatientgroupe !: FormGroup;

  id !: any;

  ngOnInit(): void {


    this.id = this.router.snapshot.paramMap.get('id');
    this.servicepatient.findByid(this.id).subscribe({
      next: (data) => {

        this.formpatientgroupe = this.formpatient.group({

          nom: [data.nom, [Validators.required]],
          prenom: [data.prenom, [Validators.required]],
          email: [data.email, [Validators.email]],
        });

      },

      error: (error) => {

      }
    });
  }
  editpatient() {

    const patient: Patient = new Patient();

    patient.nom = this.formpatientgroupe.value.nom;
    patient.prenom = this.formpatientgroupe.value.prenom;
    patient.email = this.formpatientgroupe.value.email;

    this.servicepatient.editpatient(this.id, patient).subscribe({

      next: (data) => {
        alert("patient edité avec succes !!!!!!!!!!!!!!");
        console.log(data);
        this.authpatient.setCurrentPatient(data.patient);
        this.routers.navigate(["dashbord/profile"]);
      },

      error: (error) => {

      }
    });
  }

}

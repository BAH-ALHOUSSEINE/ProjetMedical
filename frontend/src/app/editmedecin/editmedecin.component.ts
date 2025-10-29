import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { Medecin } from '../models/medecin.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthPatientService } from '../services/auth-patient.service';
import { MedecinService } from '../services/medecin.service';
import { AuthMedecinService } from '../services/auth-medecin.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-editmedecin',
  imports: [MatInputModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule],
  templateUrl: './editmedecin.component.html',
  styleUrl: './editmedecin.component.css'
})
export class EditmedecinComponent {
  editmedecin() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: ActivatedRoute, private formpatient: FormBuilder,
    private servicemedecin: MedecinService, private routers: Router, private authmedecin: AuthMedecinService) {

  }

  formpatientgroupe !: FormGroup;

  id !: any;

  ngOnInit(): void {


    this.id = this.router.snapshot.paramMap.get('id');
    this.servicemedecin.getmedecinbymatricule(this.authmedecin.getCurrentMedecin()?.matricule).subscribe({
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

    const medecin: Medecin = new Medecin();

    medecin.nom = this.formpatientgroupe.value.nom;
    medecin.prenom = this.formpatientgroupe.value.prenom;
    medecin.email = this.formpatientgroupe.value.email;
    medecin.specialiste = this.formpatientgroupe.value.specialiste;

    this.servicemedecin.editmedecin(this.id, medecin).subscribe({

      next: (data) => {
        alert("patient edité avec succes !!!!!!!!!!!!!!");
        console.log(data);
        this.authmedecin.setCurrentMedecin(data.medecin);
        this.routers.navigate(["dashbord/profile"]);
      },

      error: (error) => {

      }
    });
  }


}

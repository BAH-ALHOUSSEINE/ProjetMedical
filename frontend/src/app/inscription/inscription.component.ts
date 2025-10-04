
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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

  constructor(private fb: FormBuilder) {

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

    }
    else {
      alert("veillez remplir tous les donnée correctement");
    }
  }


}

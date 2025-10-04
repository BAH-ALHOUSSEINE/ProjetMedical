import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    MatButtonModule
  ],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formconnexion!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.formconnexion = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log("bonjour");
    if (this.formconnexion.valid) {
      alert(this.formconnexion.value.email);
    } else {
      alert("Formulaire invalide !");
      //this.formconnexion.markAllAsTouched();
    }
  }
}

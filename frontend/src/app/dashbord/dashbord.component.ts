import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { AddmedecinComponent } from '../addmedecin/addmedecin.component';
import { AuthPatientService } from '../services/auth-patient.service';
import { Patient } from '../models/patient.model';
import { AuthMedecinService } from '../services/auth-medecin.service';
import { Medecin } from '../models/medecin.model';


@Component({
  selector: 'app-dashbord',
  imports: [MatDialogModule, ReactiveFormsModule, RouterOutlet, FormsModule,
    MatListModule, MatSidenavModule, MatMenuModule, MatToolbar, MatButton,
    MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],   // 👈 important,

  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit {

  patientconnecte: Patient | null = null;
  medecinconnecte: Medecin | null = null;
  constructor(private matdialog: MatDialog, private authpatientserice: AuthPatientService,
    private authmedecin: AuthMedecinService, private router: Router
  ) {
  }
  ngOnInit(): void {

    this.patientconnecte = this.authpatientserice.getCurrentPatient();
    this.medecinconnecte = this.authmedecin.getCurrentMedecin();


  }



  addmedecin() {
    const dialogRef = this.matdialog.open(AddmedecinComponent, {
      width: '600px',
      maxWidth: '90vw',  // empêche le dépassement sur petits écrans
      maxHeight: '90vh',
      autoFocus: false  // évite le scroll automatique
    });
  }

  deconnexion() {
    this.authmedecin.logout();
    this.authpatientserice.logout();
    this.router.navigate(['']);

  }


}

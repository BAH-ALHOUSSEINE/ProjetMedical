import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ConnexionComponent } from '../connexion/connexion.component';

@Component({
  selector: 'app-acceuil',
  imports: [MatDialogModule, RouterOutlet, ReactiveFormsModule, FormsModule, MatListModule, MatSidenavModule, MatMenuModule, MatToolbar, MatButton, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {




  constructor(private dialog: MatDialog) { }

  openPopupinscription() {
    const dialogRef = this.dialog.open(InscriptionComponent, {
      height: '580px',
      width: '1000px',
      panelClass: "formdialogueinscription"
    });
  }
  openPopupconnexion() {
    const dialogRef = this.dialog.open(ConnexionComponent, {
      height: '400px',
      width: '600px',
    });


  }

  images: string[] = [
    '../../assets/images/cabinet\ medical\ 1.jpg)',
    '../../assets/images/cabinet\ medical\ 1.jpg'
  ];

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

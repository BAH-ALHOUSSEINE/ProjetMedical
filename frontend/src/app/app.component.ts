import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { computed, effect, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { OwlCarouselDirective } from './owl-carousel.directive';
@Component({
  selector: 'app-root',
  imports: [MatDialogModule, OwlCarouselDirective, RouterOutlet, ReactiveFormsModule, FormsModule, MatListModule, MatSidenavModule, MatMenuModule, UpperCasePipe, MatToolbar, MatButton, MatToolbarModule, MatButtonModule, MatIconModule],   // 👈 important,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  openPopupinscription() {
    const dialogRef = this.dialog.open(InscriptionComponent, {
      height: '580px',
      width: '1000px',
      panelClass: "formdialogueinscription"
    });
  }

  constructor(private dialog: MatDialog) { }


  openPopupconnexion() {
    const dialogRef = this.dialog.open(ConnexionComponent, {
      height: '400px',
      width: '600px',
    });


  }

}

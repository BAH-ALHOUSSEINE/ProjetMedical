import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthPatientService } from '../services/auth-patient.service';
import { AuthMedecinService } from '../services/auth-medecin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthPatientService, private authmedecin: AuthMedecinService, private router: Router) { }

  canActivate(): boolean {
    const petient = this.authService.getCurrentPatient();
    const medecin = this.authmedecin.getCurrentMedecin();

    if (petient || medecin) {
      return true;
    } else {
      this.router.navigate(['/connexion']);
      return false;
    }
  }
}

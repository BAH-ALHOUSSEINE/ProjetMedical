import { Injectable } from '@angular/core';
import { Medecin } from '../models/medecin.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthMedecinService {

  private currentPatient: Medecin | null = null;

  constructor() {

    const saved = localStorage.getItem('medecin');
    if (saved) {
      this.currentPatient = JSON.parse(saved);
    }
  }

  setCurrentMedecin(medecin: Medecin): void {
    this.currentPatient = medecin;
    localStorage.setItem('medecin', JSON.stringify(medecin));
  }


  getCurrentMedecin(): Medecin | null {
    return this.currentPatient;
  }


  logout(): void {
    this.currentPatient = null;
    localStorage.removeItem('medecin');
  }
}

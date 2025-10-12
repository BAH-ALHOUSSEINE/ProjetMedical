import { Injectable } from '@angular/core';
import { Medecin } from '../models/medecin.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthMedecinService {

  constructor() { }

  private currentPatientSubject = new BehaviorSubject<Medecin | null>(null);
  currentPatient$ = this.currentPatientSubject.asObservable();

  setCurrentMedecin(patient: Medecin): void {
    this.currentPatientSubject.next(patient);
    localStorage.setItem('medecin', JSON.stringify(patient)); // facultatif : garder la session
  }


  getCurrentMedecin(): Medecin | null {
    return this.currentPatientSubject.value;
  }


  logout(): void {
    this.currentPatientSubject.next(null);
    localStorage.removeItem('mdecin');
  }
}

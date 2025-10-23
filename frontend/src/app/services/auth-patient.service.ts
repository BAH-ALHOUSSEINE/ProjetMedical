import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class AuthPatientService {



  private currentPatient: Patient | null = null;

  constructor() {

    const saved = localStorage.getItem('patient');
    if (saved) {
      this.currentPatient = JSON.parse(saved);
    }
  }


  setCurrentPatient(patient: Patient): void {
    this.currentPatient = patient;
    localStorage.setItem('patient', JSON.stringify(patient));
  }


  getCurrentPatient(): Patient | null {
    return this.currentPatient;
  }


  logout(): void {
    this.currentPatient = null;
    localStorage.removeItem('patient');
  }
}

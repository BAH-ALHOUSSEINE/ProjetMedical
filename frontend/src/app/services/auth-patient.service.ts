import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class AuthPatientService {



  private currentPatientSubject = new BehaviorSubject<Patient | null>(null);
  currentPatient$ = this.currentPatientSubject.asObservable();

  constructor() {


  }


  setCurrentPatient(patient: Patient): void {
    this.currentPatientSubject.next(patient);
    localStorage.setItem('patient', JSON.stringify(patient)); // facultatif : garder la session
  }


  getCurrentPatient(): Patient | null {
    return this.currentPatientSubject.value;
  }


  logout(): void {
    this.currentPatientSubject.next(null);
    localStorage.removeItem('patient');
  }
}

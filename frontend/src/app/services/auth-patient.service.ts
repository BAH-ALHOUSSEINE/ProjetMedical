import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class AuthPatientService {



  private currentPatient: Patient | null = null;

  constructor() {
    // 🔄 Charger le patient depuis le localStorage au démarrage du service
    const saved = localStorage.getItem('patient');
    if (saved) {
      this.currentPatient = JSON.parse(saved);
    }
  }

  // ✅ Sauvegarder le patient lors de la connexion
  setCurrentPatient(patient: Patient): void {
    this.currentPatient = patient;
    localStorage.setItem('patient', JSON.stringify(patient));
  }

  // ✅ Récupérer le patient courant
  getCurrentPatient(): Patient | null {
    return this.currentPatient;
  }

  // 🚪 Déconnexion
  logout(): void {
    this.currentPatient = null;
    localStorage.removeItem('patient');
  }
}

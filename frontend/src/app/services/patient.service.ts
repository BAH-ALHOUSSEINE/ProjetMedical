import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development'; // ✅ pas .development
import { Patient } from '../models/patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  private baseUrl = `${environment.apiUrl}/patient`;

  constructor(private http: HttpClient) { }


  addPatient(patient: Patient): Observable<any> {
    const url = `${this.baseUrl}/inscription`;
    return this.http.post<Patient>(url, patient);
  }

  connexionPatient(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/connexion`;
    const patient = { email, password };

    return this.http.post<Patient>(url, patient);
  }

}

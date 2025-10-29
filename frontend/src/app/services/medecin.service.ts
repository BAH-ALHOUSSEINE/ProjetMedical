import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Medecin } from '../models/medecin.model';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiUrl}/medecin`;


  addmedecin(medecin: Medecin): Observable<any> {
    const url = this.baseUrl + "/addmedecin";
    return this.http.post<Medecin>(url, medecin);
  }

  connexionMedecin(email: string, password: string): Observable<any> {
    const url = this.baseUrl + "/connexion";
    const medecinlogin = { email, password };
    return this.http.post<Medecin>(url, medecinlogin);
  }

  public Allmedecin(): Observable<Medecin[]> {

    const url = this.baseUrl + "/allmedecin";
    return this.http.get<Medecin[]>(url);
  }

  editmedecin(id: Number, medecin: Medecin): Observable<any> {

    const url = `${this.baseUrl}/editmedecin/${id}`;

    return this.http.put<any>(url, medecin);
  }

  getmedecinbymatricule(matricule: String | undefined): Observable<any> {

    const url = `${this.baseUrl}/finbymatricule/${matricule}`;

    return this.http.get<any>(url);
  }




}

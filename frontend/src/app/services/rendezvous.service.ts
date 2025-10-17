import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Rendezvous } from '../models/rendezvous.model';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiUrl}/rendezvous`;


  addrendezvous(rendezvous: Rendezvous): Observable<any> {
    const url = this.baseUrl + "/addrendezvous";
    console.log(rendezvous.medecin);
    return this.http.post<any>(url, rendezvous);

  }

  findmedecinBymetricule(matricule: String): Observable<any> {
    const url = this.baseUrl + "/finbymatricule";
    return this.http.get<any>(url);
  }

  listemedecinrendezvous(matricule: String | undefined): Observable<Rendezvous[]> {

    const url = this.baseUrl + "/medecinrendezvous/" + matricule;

    return this.http.get<Rendezvous[]>(url);

  }

  deleterendezvous(id: Number) {
    alert(id);
    const url = this.baseUrl + "/deleterendezvous/" + id;
    return this.http.delete(url);
  }

  findrendezvousById(id: any | null): Observable<any> {
    const url = this.baseUrl + "/findrendezvousbyid/" + id;
    return this.http.get<Rendezvous>(url);
  }

  editrendezvous(id: Number, rendezvous: Rendezvous): Observable<any> {

    const url = this.baseUrl + "/editrendezvous/" + id;
    return this.http.put<any>(url, rendezvous);
  }

  takerendezvous(id: Number, rendezvous: Rendezvous): Observable<any> {
    const url = this.baseUrl + "/takerendrezvous/" + id;
    return this.http.put<any>(url, rendezvous);
  }

  annulerrendezvous(id: Number, rendezvous: Rendezvous): Observable<any> {
    const url = this.baseUrl + "/annulerrendezvous/" + id;
    return this.http.put<any>(url, rendezvous);
  }


}

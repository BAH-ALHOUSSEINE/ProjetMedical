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
    return this.http.post<any>(url, rendezvous);

  }

  findmedecinBymetricule(matricule: String): Observable<any> {
    const url = this.baseUrl + "/finbymatricule";
    return this.http.get<any>(url);
  }

  listemedecinrendezvous(matricule: String): Observable<Rendezvous[]> {

    const url = this.baseUrl + "/medecinrendezvous/" + matricule;

    return this.http.get<Rendezvous[]>(url);

  }
}

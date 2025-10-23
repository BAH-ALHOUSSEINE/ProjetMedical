import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Consulation } from '../models/consulation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsurlationService {

  constructor(private http: HttpClient) { }


  private baseUrl = `${environment.apiUrl}/consultation`;


  addconsultation(consultation: any): Observable<any> {
    alert("eeeeeeeeee");
    console.log(consultation);
    const url = this.baseUrl + "/addconsulatation";
    return this.http.post<any>(url, consultation);
  }

  patientconsultation(matricule: String | undefined): Observable<Consulation[]> {

    const url = this.baseUrl + "/patientconsultation/" + matricule;
    return this.http.get<Consulation[]>(url);
  }



}

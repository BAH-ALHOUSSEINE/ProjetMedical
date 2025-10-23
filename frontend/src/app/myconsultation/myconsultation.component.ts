import { Component, OnInit } from '@angular/core';
import { AuthPatientService } from '../services/auth-patient.service';
import { ConsurlationService } from '../services/consurlation.service';
import { data } from 'jquery';
import { error } from 'console';
import { Consulation } from '../models/consulation.model';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-myconsultation',
  imports: [DatePipe, MatTableModule, DatePipe],
  templateUrl: './myconsultation.component.html',
  styleUrl: './myconsultation.component.css'
})
export class MyconsultationComponent implements OnInit {


  constructor(private authpatient: AuthPatientService, private serviceconsultation: ConsurlationService) {

  }

  consultation !: Consulation[];

  ngOnInit(): void {

    this.serviceconsultation.patientconsultation(this.authpatient.getCurrentPatient()?.matricule).subscribe({


      next: (data) => {
        this.consultation = data;
        console.log(data);
      },
      error: (error) => {

      }
    });
  }

  displayedColumns: string[] = ['date', 'diagnostique', 'prescription'];


}

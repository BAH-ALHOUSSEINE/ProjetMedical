import { Component, OnInit } from '@angular/core';
import { ConsurlationService } from '../services/consurlation.service';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { error } from 'console';
import { Consulation } from '../models/consulation.model';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-historiqueconsultation',
  imports: [DatePipe, MatTableModule, DatePipe],
  templateUrl: './historiqueconsultation.component.html',
  styleUrl: './historiqueconsultation.component.css'
})
export class HistoriqueconsultationComponent implements OnInit {

  constructor(private serviceconsultation: ConsurlationService, private router: ActivatedRoute) { }
  private matricule !: String;
  consultation !: Consulation[];

  ngOnInit(): void {


    this.matricule = this.router.snapshot.paramMap.get('matricule')!;

    this.serviceconsultation.patientconsultation(this.matricule).subscribe({

      next: (data) => {
        this.consultation = data;
      }
      ,
      error: (error) => {
        alert()
      }
    });

  }

  displayedColumns: string[] = ['date', 'diagnostique', 'prescription'];

}

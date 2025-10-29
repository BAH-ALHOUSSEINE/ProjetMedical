import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Patient } from '../models/patient.model';
import { AuthPatientService } from '../services/auth-patient.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {



  constructor(private router: Router, private authPatientService: AuthPatientService,

  ) { }

  patientconnecte!: Patient | null;


  ngOnInit(): void {
    this.patientconnecte = this.authPatientService.getCurrentPatient();



  }

  editpatient(id: Number | undefined) {
    this.router.navigate(["dashbord/editpatient/" + id]);
  }


}

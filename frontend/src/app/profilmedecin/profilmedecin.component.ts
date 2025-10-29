import { Component, OnInit } from '@angular/core';
import { AuthMedecinService } from '../services/auth-medecin.service';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilmedecin',
  imports: [],
  templateUrl: './profilmedecin.component.html',
  styleUrl: './profilmedecin.component.css'
})
export class ProfilmedecinComponent implements OnInit {


  constructor(private authmedecin: AuthMedecinService, private medecinservice: MedecinService,
    private router: Router
  ) {

  }
  medecinconnect !: Medecin | null;

  ngOnInit(): void {
    this.medecinconnect = this.authmedecin.getCurrentMedecin();
  }


  editmedecin() {
    alert(this.medecinconnect?.matricule);

    this.router.navigate(["dashbord/editmedecin/" + this.medecinconnect?.matricule]);
  }



}

import { Component, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezvousService } from '../services/rendezvous.service';
import { data } from 'jquery';
import { error } from 'console';
import { MatInputModule } from "@angular/material/input";
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Rendezvous } from '../models/rendezvous.model';

@Component({
  selector: 'app-editrendezvous',
  imports: [MatInputModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './editrendezvous.component.html',
  styleUrl: './editrendezvous.component.css'
})
export class EditrendezvousComponent implements OnInit {


  constructor(private router: ActivatedRoute, private servicerendezvous: RendezvousService
    , private formbuilder: FormBuilder
  ) { }

  rendezvousform!: FormGroup;
  id: any;
  ngOnInit(): void {

    this.id = this.router.snapshot.paramMap.get('id');  // 'id' correspond à ce que tu as défini dans la route

    if (this.id) {
      this.servicerendezvous.findrendezvousById(this.id).subscribe({
        next: (data) => {
          console.log(data);

          // Remplir le formulaire avec les données reçues
          this.rendezvousform = this.formbuilder.group({
            daterendezvous: [data.date, [Validators.required]],
            heureendezvous: [data.heure, [Validators.required]]
          });
        },
        error: (error) => {
          alert("Erreur lors de la récupération du rendez-vous");
        }
      });
    } else {
      alert('ID de rendez-vous non trouvé dans l\'URL');
    }
  }

  editrendezvous() {

    const rendezvous: Rendezvous = new Rendezvous();

    rendezvous.date = this.rendezvousform.value.daterendezvous;
    rendezvous.heure = this.rendezvousform.value.heureendezvous;

    this.servicerendezvous.editrendezvous(this.id, rendezvous).subscribe({

      next: (data) => {
        alert(data.message);
      },
      error: (error) => {
        alert("erreur lors de l'edition du rendez vous" + error);
      }
    });
  }


}



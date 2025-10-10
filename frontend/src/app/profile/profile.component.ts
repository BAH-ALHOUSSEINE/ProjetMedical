import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {


  constructor(private router: Router) { }

  readonly prifil: any = signal('');

  ngOnInit(): void {



  }



}

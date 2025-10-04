import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-takerendezvous',
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './takerendezvous.component.html',
  styleUrl: './takerendezvous.component.css'
})
export class TakerendezvousComponent {

}

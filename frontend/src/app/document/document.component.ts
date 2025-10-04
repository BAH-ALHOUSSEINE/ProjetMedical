import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdddocumentComponent } from '../adddocument/adddocument.component';

@Component({
  selector: 'app-document',
  imports: [],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {

  constructor(private dialog: MatDialog) { }


  ajoutdocument() {

    const dialogRef = this.dialog.open(AdddocumentComponent, {
      height: '200px',
      width: '200px',
    });

  }

}

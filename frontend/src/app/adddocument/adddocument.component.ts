import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-adddocument',
  imports: [
    FormsModule,
    ReactiveFormsModule,  // <--- AJOUTER ICI
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './adddocument.component.html',
  styleUrl: './adddocument.component.css'
})
export class AdddocumentComponent {


  pdfForm: FormGroup;
  selectedFile: File | null = null;
  namefile?: string;

  constructor(private fb: FormBuilder) {
    this.pdfForm = this.fb.group({
      file: [null, Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file
      this.namefile = file.name;
      this.pdfForm.patchValue({ file: file });
      this.pdfForm.get('file')?.updateValueAndValidity();
    } else {
      alert('Veuillez sélectionner uniquement un fichier PDF.');
    }
  }

  onSubmit() {
    if (this.pdfForm.valid && this.selectedFile) {
      console.log('Fichier PDF sélectionné :', this.selectedFile);

      // Ici tu peux envoyer vers ton backend via HttpClient
      // Exemple : this.http.post('api/upload', formData)

      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // envoi au serveur (à compléter avec HttpClient)
      alert(`PDF "${this.selectedFile.name}" prêt à être uploadé.`);
    }
  }
}

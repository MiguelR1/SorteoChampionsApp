import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-final-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './finalModal.component.html',
})
export class FinalModalComponent {

  campeon: {nombre: string;img: string;} = {
    nombre:'',
    img:''
  }


  constructor(public matDialog:MatDialogRef<FinalModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      nombre: string;
      img: string;
    }
  ){

    console.log(data);
    this.campeon.img = data.img;
    this.campeon.nombre = data.nombre;

  }

 }

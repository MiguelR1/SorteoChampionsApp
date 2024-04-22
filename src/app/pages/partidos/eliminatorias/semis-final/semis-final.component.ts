import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Equipo, kospartidos, partidos } from '../../../../interfaces/interface';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, Form } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FinalModalComponent } from '../finalModal/finalModal.component';


@Component({
  selector: 'app-semis-final',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './semis-final.component.html',
})
export class SemisFinalComponent implements OnInit{

  router = inject(Router)

  clasiOctavos: string[] = []

  partidosCuartos!: kospartidos;

  semisClasificados: Equipo[] = []

  public fb = inject(FormBuilder)

  semis1idaForm: FormGroup = this.fb.group({
    pegoles: [0, Validators.required],
    segoles: [0, Validators.required],
  })

  semis2idaForm: FormGroup = this.fb.group({
    pegoles: [0, Validators.required],
    segoles: [0, Validators.required],
  })

  semis1vueltaForm: FormGroup = this.fb.group({
    pegoles: [0, Validators.required],
    segoles: [0, Validators.required],
  })

  semis2vueltaForm: FormGroup = this.fb.group({
    pegoles: [0, Validators.required],
    segoles: [0, Validators.required],
  })

  finalForm: FormGroup = this.fb.group({
    pequipoGoles: [0, Validators.required],
    sequipoGoles: [0, Validators.required]
  })

  getPartidosCuartos(){

    let partidosCuartos = localStorage.getItem('Cuartos')

    if (partidosCuartos) {

      let prtCuuartos = JSON.parse(partidosCuartos)

      this.partidosCuartos = prtCuuartos

      console.log(this.partidosCuartos);

      this.getClasificadosSemis()

    } else{
      this.router.navigateByUrl('')
    }
  }

  getClasificadosSemis(){
    let cSemis = localStorage.getItem('Clasificados de cuartos')

    if (cSemis) {
      let clSemis = JSON.parse(cSemis)

      this.semisClasificados = clSemis

      console.log(this.semisClasificados);
    }
  }

  partidosSemis(){

      let partido1ida = {
        pEquipo: this.semisClasificados[0].name,
        pEquipoimg: this.semisClasificados[0].img,
        sEquipo: this.semisClasificados[1].name,
        sEquipoimg: this.semisClasificados[1].img,
        pegoles: this.semis1idaForm.controls['pegoles'].value,
        segoles: this.semis1idaForm.controls['segoles'].value
      }

      let partido2ida = {
        pEquipo: this.semisClasificados[2].name,
        pEquipoimg: this.semisClasificados[2].img,
        sEquipo: this.semisClasificados[3].name,
        sEquipoimg: this.semisClasificados[3].img,
        pegoles: this.semis2idaForm.controls['pegoles'].value,
        segoles: this.semis2idaForm.controls['segoles'].value
      }

      let partido1vuelta = {
        pEquipo: this.semisClasificados[0].name,
        sEquipo: this.semisClasificados[1].name,
        pegoles: this.semis1vueltaForm.controls['pegoles'].value,
        segoles: this.semis1vueltaForm.controls['segoles'].value
      }

      let partido2vuelta = {
        pEquipo: this.semisClasificados[2].name,
        sEquipo: this.semisClasificados[3].name,
        pegoles: this.semis2vueltaForm.controls['pegoles'].value,
        segoles: this.semis2vueltaForm.controls['segoles'].value
      }

      console.log(
        partido1ida, partido2ida, partido1vuelta, partido2vuelta
      );

      let partidoGlobal1 = {
        pequipo: partido1ida.pEquipo,
        pequipoimg: partido1ida.pEquipoimg,
        pequipogoles: partido1ida.pegoles + partido1vuelta.pegoles,
        sequipo: partido1ida.sEquipo,
        sequipoimg: partido1ida.sEquipoimg,
        sequipogoles: partido1ida.segoles + partido1vuelta.segoles,
      }

      if (partidoGlobal1.pequipogoles > partidoGlobal1.sequipogoles) {
        this.finalistas.finalista1 = partidoGlobal1.pequipo
        this.finalistas.finalista1img = partidoGlobal1.pequipoimg
      } else{
        this.finalistas.finalista1 = partidoGlobal1.sequipo
        this.finalistas.finalista1img = partidoGlobal1.sequipoimg
      }

      let partidoGlobal2 = {
        pequipo: partido2ida.pEquipo,
        pequipoimg: partido2ida.pEquipoimg,
        pequipogoles: partido2ida.pegoles + partido2vuelta.pegoles,
        sequipo: partido2ida.sEquipo,
        sequipoimg: partido2ida.sEquipoimg,
        sequipogoles: partido2ida.segoles + partido2vuelta.segoles,
      }

      if (partidoGlobal2.pequipogoles > partidoGlobal2.sequipogoles) {
        this.finalistas.finalista2 = partidoGlobal2.pequipo
        this.finalistas.finalista2img = partidoGlobal2.pequipoimg
      } else{
        this.finalistas.finalista2 = partidoGlobal2.sequipo
        this.finalistas.finalista2img = partidoGlobal2.sequipoimg
      }
      console.log(this.finalistas);
      localStorage.setItem('Finalistas', JSON.stringify(this.finalistas));
  }

  finalistas: {
    finalista1: string;
    finalista1img: string;
    finalista2: string;
    finalista2img: string;
  } = {
    finalista1: '',
    finalista1img: '',
    finalista2: '',
    finalista2img: ''
  }

  getFinalistas(){
    let finalistas = localStorage.getItem('Finalistas')

    if (finalistas) {
      this.finalistas = JSON.parse(finalistas);
    }
  }

  ngOnInit(): void {
    this.getPartidosCuartos()
    this.getFinalistas()
  }

  constructor(private matDialog:MatDialog){}

  campeon: {nombre:string, img:string} = {
    nombre: '',
    img: ''
  }

  campeonesModal(){

    if (this.finalForm.controls['pequipoGoles'].value > this.finalForm.controls['sequipoGoles'].value) {
      this.campeon.nombre = this.finalistas.finalista1
      this.campeon.img = this.finalistas.finalista1img
    }else if (this.finalForm.controls['pequipoGoles'].value < this.finalForm.controls['sequipoGoles'].value) {
      this.campeon.nombre = this.finalistas.finalista2
      this.campeon.img = this.finalistas.finalista2img
    }

    this.matDialog.open(FinalModalComponent,
      {
        data: this.campeon
      }
    )
  }

 }

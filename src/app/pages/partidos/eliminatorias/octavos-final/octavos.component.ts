import { CommonModule, IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Equipo, fasesGrupos, koEquipo, koPartido, kospartidos, octPartido, partidos } from '../../../../interfaces/interface';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-kos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './octavos.component.html',
})
export class KOsComponent implements OnInit {

  fb = inject(FormBuilder);

  public router = inject(Router)

  route = inject(Router)

  clasificados =
    {
      primerP: {
        clasificado11Equipo: false,
        clasificado12Equipo: false,
        equipo: ''
      },
      segundoP: {
        clasificado21Equipo: false,
        clasificado22Equipo: false,
        equipo: ''
      },
      terceroP: {
        clasificado31Equipo: false,
        clasificado32Equipo: false,
        equipo: ''
      },
      cuartoP: {
        clasificado41Equipo: false,
        clasificado42Equipo: false,
        equipo: ''
      },
      quintoP: {
        clasificado51Equipo: false,
        clasificado52Equipo: false,
        equipo: ''
      },
      sextoP: {
        clasificado61Equipo: false,
        clasificado62Equipo: false,
        equipo: ''
      },
      septimoP: {
        clasificado71Equipo: false,
        clasificado72Equipo: false,
        equipo: ''
      },
      octavoP: {
        clasificado81Equipo: false,
        clasificado82Equipo: false,
        equipo: ''
      },

  }

  resultados = [
    {
      partido: 1,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    },
    {
      partido: 2,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    },
    {
      partido: 3,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    },
    {
      partido: 4,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    },
    {
      partido: 5,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    },
    {
      partido: 6,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    },
    {
      partido: 7,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    },
    {
      partido: 8,
      golPrimerEquipo: 0,
      golSegundoEquipo: 0,
      primerequipo: '',
      segundoequipo: ''
    }
  ]

  octavosP: koPartido = {
    partido1 : [],
    partido2 : [],
    partido3 : [],
    partido4 : [],
    partido5 : [],
    partido6 : [],
    partido7 : [],
    partido8 : [],
  }

  equipoSacado!: koEquipo;
  gruposPosibles: number[] = []
  es: boolean = false;
  esindex: number = 0
  octavosIda: partidos[] = []
  octavosVuelta: partidos[] = []
  fasesGrupos!:fasesGrupos;
  bpLugar: Equipo[] = [];
  bsLugar: Equipo[] = [];
  grupoA : Equipo[] = [];
  grupoB : Equipo[] = [];
  grupoC : Equipo[] = [];
  grupoD : Equipo[] = [];
  grupoE : Equipo[] = [];
  grupoF : Equipo[] = [];
  grupoG : Equipo[] = [];
  grupoH : Equipo[] = [];

  public oct1: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public oct2: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public oct3: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public oct4: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public oct5: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public oct6: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public oct7: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public oct8: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv1: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv2: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv3: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv4: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv5: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv6: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv7: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })
  public octv8: FormGroup = this.fb.group ({
    local: [0, Validators.required],
    localg: [0, Validators.required],
    visitante: [0, Validators.required],
    visg: [0, Validators.required]
  })

  octavos:kospartidos = {
    ida: [],
    vuelta: []
  }

  getOctavosIda(){
    let partido1 = {
      local: this.octavosP.partido1[0].name,
      localimg: this.octavosP.partido1[0].img,
      visitante: this.octavosP.partido1[1].name,
      visitanteimg: this.octavosP.partido1[1].img
    }

    let partido2 = {
      local: this.octavosP.partido2[0].name,
      localimg: this.octavosP.partido2[0].img,
      visitante: this.octavosP.partido2[1].name,
      visitanteimg: this.octavosP.partido2[1].img
    }

    let partido3 = {
      local: this.octavosP.partido3[0].name,
      localimg: this.octavosP.partido3[0].img,
      visitante: this.octavosP.partido3[1].name,
      visitanteimg: this.octavosP.partido3[1].img
    }
    let partido4 = {
      local: this.octavosP.partido4[0].name,
      localimg: this.octavosP.partido4[0].img,
      visitante: this.octavosP.partido4[1].name,
      visitanteimg: this.octavosP.partido4[1].img
    }
    let partido5 = {
      local: this.octavosP.partido5[0].name,
      localimg: this.octavosP.partido5[0].img,
      visitante: this.octavosP.partido5[1].name,
      visitanteimg: this.octavosP.partido5[1].img
    }
    let partido6 = {
      local: this.octavosP.partido6[0].name,
      localimg: this.octavosP.partido6[0].img,
      visitante: this.octavosP.partido6[1].name,
      visitanteimg: this.octavosP.partido6[1].img
    }
    let partido7 = {
      local: this.octavosP.partido7[0].name,
      localimg: this.octavosP.partido7[0].img,
      visitante: this.octavosP.partido7[1].name,
      visitanteimg: this.octavosP.partido7[1].img
    }
    let partido8 = {
      local: this.octavosP.partido8[0].name,
      localimg: this.octavosP.partido8[0].img,
      visitante: this.octavosP.partido8[1].name,
      visitanteimg: this.octavosP.partido8[1].img
    }

    this.octavosIda.push(
      partido1, partido2, partido3, partido4, partido5, partido6, partido7, partido8
    )

  }

  getOctavosVuelta(){
    let partido1 = {
      local: this.octavosP.partido1[1].name,
      localimg: this.octavosP.partido1[1].img,
      visitante: this.octavosP.partido1[0].name,
      visitanteimg: this.octavosP.partido1[0].img
    }

    let partido2 = {
      local: this.octavosP.partido2[1].name,
      localimg: this.octavosP.partido2[1].img,
      visitante: this.octavosP.partido2[0].name,
      visitanteimg: this.octavosP.partido2[0].img
    }

    let partido3 = {
      local: this.octavosP.partido3[1].name,
      localimg: this.octavosP.partido3[1].img,
      visitante: this.octavosP.partido3[0].name,
      visitanteimg: this.octavosP.partido3[0].img
    }
    let partido4 = {
      local: this.octavosP.partido4[1].name,
      localimg: this.octavosP.partido4[1].img,
      visitante: this.octavosP.partido4[0].name,
      visitanteimg: this.octavosP.partido4[0].img
    }
    let partido5 = {
      local: this.octavosP.partido5[1].name,
      localimg: this.octavosP.partido5[1].img,
      visitante: this.octavosP.partido5[0].name,
      visitanteimg: this.octavosP.partido5[0].img
    }
    let partido6 = {
      local: this.octavosP.partido6[1].name,
      localimg: this.octavosP.partido6[1].img,
      visitante: this.octavosP.partido6[0].name,
      visitanteimg: this.octavosP.partido6[0].img
    }
    let partido7 = {
      local: this.octavosP.partido7[1].name,
      localimg: this.octavosP.partido7[1].img,
      visitante: this.octavosP.partido7[0].name,
      visitanteimg: this.octavosP.partido7[0].img
    }
    let partido8 = {
      local: this.octavosP.partido8[1].name,
      localimg: this.octavosP.partido8[1].img,
      visitante: this.octavosP.partido8[0].name,
      visitanteimg: this.octavosP.partido8[0].img
    }

    this.octavosVuelta.push(
      partido1, partido2, partido3, partido4, partido5, partido6, partido7, partido8
    )
  }

  formOctIda(){
    let partido1 = {
      local: this.octavosIda[0].local,
      localimg: this.octavosIda[0].localimg ,
      golesl: this.oct1.controls['local'].value,
      visitante: this.octavosIda[0].visitante,
      visitanteimg: this.octavosIda[0].visitanteimg ,
      golesv: this.oct1.controls['visitante'].value
    }

    let partido2 = {
      local: this.octavosIda[1].local,
      localimg: this.octavosIda[1].localimg ,
      golesl: this.oct2.controls['local'].value,
      visitante: this.octavosIda[1].visitante,
      visitanteimg: this.octavosIda[1].visitanteimg ,
      golesv: this.oct2.controls['visitante'].value
    }

    let partido3 = {
      local: this.octavosIda[2].local,
      localimg: this.octavosIda[2].localimg ,
      golesl: this.oct3.controls['local'].value,
      visitante: this.octavosIda[2].visitante,
      visitanteimg: this.octavosIda[2].visitanteimg ,
      golesv: this.oct3.controls['visitante'].value
    }
    let partido4 = {
      local: this.octavosIda[3].local,
      localimg: this.octavosIda[3].localimg ,
      golesl: this.oct4.controls['local'].value,
      visitante: this.octavosIda[3].visitante,
      visitanteimg: this.octavosIda[3].visitanteimg ,
      golesv: this.oct4.controls['visitante'].value
    }
    let partido5 = {
      local: this.octavosIda[4].local,
      localimg: this.octavosIda[4].localimg ,
      golesl: this.oct5.controls['local'].value,
      visitante: this.octavosIda[4].visitante,
      visitanteimg: this.octavosIda[4].visitanteimg ,
      golesv: this.oct5.controls['visitante'].value
    }
    let partido6 = {
      local: this.octavosIda[5].local,
      localimg: this.octavosIda[5].localimg ,
      golesl: this.oct6.controls['local'].value,
      visitante: this.octavosIda[5].visitante,
      visitanteimg: this.octavosIda[5].visitanteimg ,
      golesv: this.oct6.controls['visitante'].value
    }
    let partido7 = {
      local: this.octavosIda[6].local,
      localimg: this.octavosIda[6].localimg ,
      golesl: this.oct7.controls['local'].value,
      visitante: this.octavosIda[6].visitante,
      visitanteimg: this.octavosIda[6].visitanteimg ,
      golesv: this.oct7.controls['visitante'].value
    }
    let partido8 = {
      local: this.octavosIda[7].local,
      localimg: this.octavosIda[7].localimg ,
      golesl: this.oct8.controls['local'].value,
      visitante: this.octavosIda[7].visitante,
      visitanteimg: this.octavosIda[7].visitanteimg ,
      golesv: this.oct8.controls['visitante'].value
    }

    if (this.octavos.ida.length) {
      this.octavos.ida.splice(0, this.octavos.ida.length)
      this.formOctIda()
    } else{
          this.octavos.ida.push(
            partido1,
            partido2,
            partido3,
            partido4,
            partido5,
            partido6,
            partido7,
            partido8
          )
    }

    for (let i = 0; i < 8; i++) {
      this.octavoTotal(i)
    }
  }

  formOctVuelta(){
    let partido1:octPartido = {
      local: this.octavosVuelta[0].local,
      localimg: this.octavosVuelta[0].localimg ,
      golesl: this.octv1.controls['local'].value,
      visitante: this.octavosVuelta[0].visitante,
      visitanteimg: this.octavosVuelta[0].visitanteimg ,
      golesv: this.octv1.controls['visitante'].value
    }
    let partido2:octPartido = {
      local: this.octavosVuelta[1].local,
      localimg: this.octavosVuelta[1].localimg ,
      golesl: this.octv2.controls['local'].value,
      visitante: this.octavosVuelta[1].visitante,
      visitanteimg: this.octavosVuelta[1].visitanteimg ,
      golesv: this.octv2.controls['visitante'].value
    }
    let partido3:octPartido = {
      local: this.octavosVuelta[2].local,
      localimg: this.octavosVuelta[2].localimg ,
      golesl: this.octv3.controls['local'].value,
      visitante: this.octavosVuelta[2].visitante,
      visitanteimg: this.octavosVuelta[2].visitanteimg ,
      golesv: this.octv3.controls['visitante'].value
    }
    let partido4:octPartido = {
      local: this.octavosVuelta[3].local,
      localimg: this.octavosVuelta[3].localimg ,
      golesl: this.octv4.controls['local'].value,
      visitante: this.octavosVuelta[3].visitante,
      visitanteimg: this.octavosVuelta[3].visitanteimg ,
      golesv: this.octv4.controls['visitante'].value
    }
    let partido5:octPartido = {
      local: this.octavosVuelta[4].local,
      localimg: this.octavosVuelta[4].localimg ,
      golesl: this.octv5.controls['local'].value,
      visitante: this.octavosVuelta[4].visitante,
      visitanteimg: this.octavosVuelta[4].visitanteimg ,
      golesv: this.octv5.controls['visitante'].value
    }
    let partido6:octPartido = {
      local: this.octavosVuelta[5].local,
      localimg: this.octavosVuelta[5].localimg ,
      golesl: this.octv6.controls['local'].value,
      visitante: this.octavosVuelta[5].visitante,
      visitanteimg: this.octavosVuelta[5].visitanteimg ,
      golesv: this.octv6.controls['visitante'].value
    }
    let partido7:octPartido = {
      local: this.octavosVuelta[6].local,
      localimg: this.octavosVuelta[6].localimg ,
      golesl: this.octv7.controls['local'].value,
      visitante: this.octavosVuelta[6].visitante,
      visitanteimg: this.octavosVuelta[6].visitanteimg ,
      golesv: this.octv7.controls['visitante'].value
    }
    let partido8:octPartido = {
      local: this.octavosVuelta[7].local,
      localimg: this.octavosVuelta[7].localimg ,
      golesl: this.octv8.controls['local'].value,
      visitante: this.octavosVuelta[7].visitante,
      visitanteimg: this.octavosVuelta[7].visitanteimg ,
      golesv: this.octv8.controls['visitante'].value
    }

    this.octavos.vuelta.push(
      partido1,
      partido2,
      partido3,
      partido4,
      partido5,
      partido6,
      partido7,
      partido8
    )

    console.log(this.octavos.vuelta);


    localStorage.setItem('Octavos', JSON.stringify(this.octavos))

      for (let i = 0; i < 8; i++) {
        this.octavoTotal(i)
      }
  }

octavoTotal(i:number){
  let local = this.octavos.ida[i].local
  let visitante = this.octavos.ida[i].visitante;
  let golesl = 0;
  let golesv = 0;

  if (this.octavos.vuelta.length>0) {
    golesl = this.octavos.ida[i].golesl + this.octavos.vuelta[i].golesv
    golesv = this.octavos.ida[i].golesv + this.octavos.vuelta[i].golesl
  } else{
    golesl = this.octavos.ida[i].golesl
    golesv = this.octavos.ida[i].golesv
  }
  this.resultados.find(
    m => {
      if (m.partido === i + 1) {
        m.primerequipo = local
        m.segundoequipo = visitante
        m.golPrimerEquipo = golesl
        m.golSegundoEquipo = golesv
      }
    }
  )

  if (this.resultados[0].golPrimerEquipo < this.resultados[0].golSegundoEquipo) {
    this.clasificados.primerP.clasificado11Equipo = true

    this.clasificados.primerP.equipo = this.resultados[0].segundoequipo

  }else if (this.resultados[0].golPrimerEquipo > this.resultados[0].golSegundoEquipo) {
    this.clasificados.primerP.clasificado12Equipo = true

    this.clasificados.primerP.equipo = this.resultados[0].primerequipo
  }
  if (this.resultados[1].golPrimerEquipo < this.resultados[1].golSegundoEquipo) {
    this.clasificados.segundoP.clasificado21Equipo = true

    this.clasificados.segundoP.equipo = this.resultados[1].segundoequipo

  }else if (this.resultados[1].golPrimerEquipo > this.resultados[1].golSegundoEquipo) {
    this.clasificados.segundoP.clasificado22Equipo = true

    this.clasificados.segundoP.equipo = this.resultados[1].primerequipo
  }
  if (this.resultados[2].golPrimerEquipo < this.resultados[2].golSegundoEquipo) {
    this.clasificados.terceroP.clasificado31Equipo = true

    this.clasificados.terceroP.equipo = this.resultados[2].segundoequipo

  }else if (this.resultados[2].golPrimerEquipo > this.resultados[2].golSegundoEquipo) {
    this.clasificados.terceroP.clasificado32Equipo = true

    this.clasificados.terceroP.equipo = this.resultados[2].primerequipo
  }
  if (this.resultados[3].golPrimerEquipo < this.resultados[3].golSegundoEquipo) {
    this.clasificados.cuartoP.clasificado41Equipo = true

    this.clasificados.cuartoP.equipo = this.resultados[3].segundoequipo

  }else if (this.resultados[3].golPrimerEquipo > this.resultados[3].golSegundoEquipo) {
    this.clasificados.cuartoP.clasificado42Equipo = true

    this.clasificados.cuartoP.equipo = this.resultados[3].primerequipo
  }
  if (this.resultados[4].golPrimerEquipo < this.resultados[4].golSegundoEquipo) {
    this.clasificados.quintoP.clasificado51Equipo = true

    this.clasificados.quintoP.equipo = this.resultados[4].segundoequipo

  }else if (this.resultados[4].golPrimerEquipo > this.resultados[4].golSegundoEquipo) {
    this.clasificados.quintoP.clasificado52Equipo = true

    this.clasificados.quintoP.equipo = this.resultados[4].primerequipo
  }
  if (this.resultados[5].golPrimerEquipo < this.resultados[5].golSegundoEquipo) {
    this.clasificados.sextoP.clasificado61Equipo = true

    this.clasificados.sextoP.equipo = this.resultados[5].segundoequipo

  }else if (this.resultados[5].golPrimerEquipo > this.resultados[5].golSegundoEquipo) {
    this.clasificados.sextoP.clasificado62Equipo = true

    this.clasificados.sextoP.equipo = this.resultados[5].primerequipo
  }
  if (this.resultados[6].golPrimerEquipo < this.resultados[6].golSegundoEquipo) {
    this.clasificados.septimoP.clasificado71Equipo = true

    this.clasificados.septimoP.equipo = this.resultados[6].segundoequipo

  }else if (this.resultados[6].golPrimerEquipo > this.resultados[6].golSegundoEquipo) {
    this.clasificados.septimoP.clasificado72Equipo = true

    this.clasificados.septimoP.equipo = this.resultados[6].primerequipo
  }
  if (this.resultados[7].golPrimerEquipo < this.resultados[7].golSegundoEquipo) {
    this.clasificados.octavoP.clasificado81Equipo = true

    this.clasificados.octavoP.equipo = this.resultados[7].segundoequipo

  }else if (this.resultados[7].golPrimerEquipo > this.resultados[7].golSegundoEquipo) {
    this.clasificados.octavoP.clasificado82Equipo = true

    this.clasificados.octavoP.equipo = this.resultados[7].primerequipo
  }

  if (this.octavos.vuelta.length>0) {
    localStorage.setItem('Clasificados de octavos', JSON.stringify(this.clasificados))
    this.router.navigateByUrl('/dashboard/eliminatorias-finales')
  }

}

ngOnInit(): void {
  this.getPositions()
  this.getPartidos()
  this.injectinBombos()
  this.getOctavosSorteo()
}

  getPartidos(){
    let octStorage = localStorage.getItem('Octavos')

    if (octStorage) {

      this.octavosIda = JSON.parse(octStorage).ida
      this.octavosVuelta = JSON.parse(octStorage).vuelta

      console.log(this.octavos);
    }
  }

  getPositions(){
    let position = localStorage.getItem('Fases posiciones');

    if (position) {
      this.fasesGrupos = JSON.parse(position)

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof1.length; i++) {
        const element = this.fasesGrupos.grupof1[i];
        this.grupoA.push(element)
      }

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof2.length; i++) {
        const element2 = this.fasesGrupos.grupof2[i];
        this.grupoB.push(element2)
      }

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof3.length; i++) {
        const element3 = this.fasesGrupos.grupof3[i];
        this.grupoC.push(element3)
      }

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof4.length; i++) {
        const element4 = this.fasesGrupos.grupof4[i];
        this.grupoD.push(element4)
      }

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof5.length; i++) {
        const element5 = this.fasesGrupos.grupof5[i];
        this.grupoE.push(element5)
      }

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof6.length; i++) {
        const element6 = this.fasesGrupos.grupof6[i];
        this.grupoF.push(element6)
      }

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof7.length; i++) {
        const element7 = this.fasesGrupos.grupof7[i];
        this.grupoG.push(element7)
      }

      for (let i = 0; i < 2 && i < this.fasesGrupos.grupof8.length; i++) {
        const element8 = this.fasesGrupos.grupof8[i];
        this.grupoH.push(element8)
      }

    } else{
      this.route.navigateByUrl('/dashboard/home')
    }

  }

  injectinBombos(){
    this.bpLugar.push(
      this.fasesGrupos.grupof1[0],
      this.fasesGrupos.grupof2[0],
      this.fasesGrupos.grupof3[0],
      this.fasesGrupos.grupof4[0],
      this.fasesGrupos.grupof5[0],
      this.fasesGrupos.grupof6[0],
      this.fasesGrupos.grupof7[0],
      this.fasesGrupos.grupof8[0]
    );

    this.bsLugar.push(
      this.fasesGrupos.grupof1[1],
      this.fasesGrupos.grupof2[1],
      this.fasesGrupos.grupof3[1],
      this.fasesGrupos.grupof4[1],
      this.fasesGrupos.grupof5[1],
      this.fasesGrupos.grupof6[1],
      this.fasesGrupos.grupof7[1],
      this.fasesGrupos.grupof8[1]
    )

  }

  sEquipo(number:number){

    if (number == 1) {

      if (this.octavosP.partido7[0]) {
      this.octavosP.partido8.push(this.bpLugar[0])

      }else if(this.octavosP.partido6[0]){
      this.octavosP.partido7.push(this.bpLugar[0])

      }else if(this.octavosP.partido5[0]){
      this.octavosP.partido6.push(this.bpLugar[0])

      }else if(this.octavosP.partido4[0]){
      this.octavosP.partido5.push(this.bpLugar[0])

      }else if(this.octavosP.partido3[0]){
      this.octavosP.partido4.push(this.bpLugar[0])

      }else if(this.octavosP.partido2[0]){
      this.octavosP.partido3.push(this.bpLugar[0])

      }else if(this.octavosP.partido1[0]){
        this.octavosP.partido2.push(this.bpLugar[0])
      }else{
        this.octavosP.partido1.push(this.bpLugar[0])
      }
      this.bpLugar.splice(0, 1)

    } else if(number == 2){

      this.es = true

      let number = Math.floor(Math.random() * (this.bsLugar.length));

      this.esindex = number

      this.equipoSacado = this.bsLugar[number]

      let partido1 = this.octavosP.partido1;
      let partido2 = this.octavosP.partido2;
      let partido3 = this.octavosP.partido3;
      let partido4 = this.octavosP.partido4;
      let partido5 = this.octavosP.partido5;
      let partido6 = this.octavosP.partido6;
      let partido7 = this.octavosP.partido7;
      let partido8 = this.octavosP.partido8;

     const mismaL1 = partido1.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)
     const mismaL2 = partido2.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)
     const mismaL3 = partido3.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)
     const mismaL4 = partido4.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)
     const mismaL5 = partido5.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)
     const mismaL6 = partido6.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)
     const mismaL7 = partido7.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)
     const mismaL8 = partido8.filter(m => m.league === this.bsLugar[number].league && m.id === this.bsLugar[number].id)

     this.gruposPosibles.splice(0, this.gruposPosibles.length)

     if (mismaL1.length == 0 && !partido1[1]) {
      this.gruposPosibles.push(1)
     }
     if (mismaL2.length == 0 && !partido2[1]) {
      this.gruposPosibles.push(2)
     }
     if (mismaL3.length == 0 && !partido3[1]) {
      this.gruposPosibles.push(3)
     }
     if (mismaL4.length == 0 && !partido4[1]) {
      this.gruposPosibles.push(4)
     }
     if (mismaL5.length == 0 && !partido5[1]) {
      this.gruposPosibles.push(5)
     }
     if (mismaL6.length == 0 && !partido6[1]) {
      this.gruposPosibles.push(6)
     }
     if (mismaL7.length == 0 && !partido7[1]) {
      this.gruposPosibles.push(7)
     }
     if (mismaL8.length == 0 && !partido8[1]) {
      this.gruposPosibles.push(8)
     }
    }
  }

  getOctavosSorteo(){
    let sorteoChampions = localStorage.getItem('Sorteo octavos');

    if (sorteoChampions) {
      this.octavosP = JSON.parse(sorteoChampions);

      this.bpLugar.splice(0, this.bpLugar.length);
      this.bsLugar.splice(0, this.bsLugar.length);

      this.getOctavosIda()
      this.getOctavosVuelta()
    }
  }

  grupoRandom(){

    let number = Math.floor(Math.random() * (this.gruposPosibles.length));

    if (this.gruposPosibles[number] == 1) {
      this.octavosP.partido1.push(this.equipoSacado)
    } else if (this.gruposPosibles[number] == 2) {
      this.octavosP.partido2.push(this.equipoSacado)
    }else if (this.gruposPosibles[number] == 3) {
      this.octavosP.partido3.push(this.equipoSacado)
    }else if (this.gruposPosibles[number] == 4) {
      this.octavosP.partido4.push(this.equipoSacado)
    }else if (this.gruposPosibles[number] == 5) {
      this.octavosP.partido5.push(this.equipoSacado)
    }else if (this.gruposPosibles[number] == 6) {
      this.octavosP.partido6.push(this.equipoSacado)
    }else if (this.gruposPosibles[number] == 7) {
      this.octavosP.partido7.push(this.equipoSacado)
    }else if (this.gruposPosibles[number] == 8) {
      this.octavosP.partido8.push(this.equipoSacado)
    }

    this.bsLugar.splice(this.esindex, 1)
    this.es = false

    if (
      this.octavosP.partido1.length > 1 &&
      this.octavosP.partido2.length > 1 &&
      this.octavosP.partido3.length > 1 &&
      this.octavosP.partido4.length > 1 &&
      this.octavosP.partido5.length > 1 &&
      this.octavosP.partido6.length > 1 &&
      this.octavosP.partido7.length > 1 &&
      this.octavosP.partido8.length > 1
    ) {
      this.getOctavosIda()
      this.getOctavosVuelta()
    }

    localStorage.setItem('Sorteo octavos', JSON.stringify(this.octavosP))
  }

}

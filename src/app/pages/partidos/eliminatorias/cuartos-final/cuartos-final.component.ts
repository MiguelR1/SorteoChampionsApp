import { CommonModule, getLocaleEraNames } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Bombos, Equipo, cuartosPartido, globalPartido, koEquipo, kospartidos, octPartido } from '../../../../interfaces/interface';
import { SchampionService } from '../../../../services/schampion.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuartos-final',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './cuartos-final.component.html',
})
export class CuartosFinalComponent implements OnInit {

  fb = inject(FormBuilder)

  cuartosPrimerPartido: FormGroup = this.fb.group ({
   golespe: [0, Validators.required],
   golesse: [0, Validators.required]
  })

  cuartosSegundoPartido: FormGroup = this.fb.group ({
    primerEquipo: ['', Validators.required],
    segundoEquipo: ['', Validators.required],
    golespe: [0, Validators.required],
    golesse: [0, Validators.required]
   })

   cuartosTerceroPartido: FormGroup = this.fb.group ({
    primerEquipo: ['', Validators.required],
    segundoEquipo: ['', Validators.required],
    golespe: [0, Validators.required],
    golesse: [0, Validators.required]
   })

   cuartosCuartoPartido: FormGroup = this.fb.group ({
    primerEquipo: ['', Validators.required],
    segundoEquipo: ['', Validators.required],
    golespe: [0, Validators.required],
    golesse: [0, Validators.required]
   })

   cuartosPrimerPartidoVuelta: FormGroup = this.fb.group ({
    golespe: [0, Validators.required],
    golesse: [0, Validators.required]
   })

   cuartosSegundoPartidoVuelta: FormGroup = this.fb.group ({
     primerEquipo: ['', Validators.required],
     segundoEquipo: ['', Validators.required],
     golespe: [0, Validators.required],
     golesse: [0, Validators.required]
    })

    cuartosTerceroPartidoVuelta: FormGroup = this.fb.group ({
     primerEquipo: ['', Validators.required],
     segundoEquipo: ['', Validators.required],
     golespe: [0, Validators.required],
     golesse: [0, Validators.required]
    })

    cuartosCuartoPartidoVuelta: FormGroup = this.fb.group ({
     primerEquipo: ['', Validators.required],
     segundoEquipo: ['', Validators.required],
     golespe: [0, Validators.required],
     golesse: [0, Validators.required]
    })

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

  bomboCuartos: Equipo[] = []

  cfClasificados: Equipo[] = [];

  resultadosGlobales: globalPartido[] = []

  cuartosPartidos:kospartidos = {
    ida: [],
    vuelta: []
  }

  infoEquipo!: Bombos;
  numEquipoRandom: number = 0;
  mostrarForm: boolean = false;
  router = inject(Router)
  sc = inject(SchampionService)

  //Objeto de los partido de cuartos de final
  partidos: cuartosPartido = {
    primerPartido: [],
    segundoPartido: [],
    terceroPartido: [],
    cuartoPartido: []
  }

  resultadosCuartos = {
    priPartido: {
      golesl: 0,
      golesv: 0
    },
    segPartido: {
      golesl: 0,
      golesv: 0
    },
    terPartido: {
      golesl: 0,
      golesv: 0
    },
    cuarPartido: {
      golesl: 0,
      golesv: 0
    }
  }

  mostrarResultado: boolean = false

  getInfoEquipo(){
    this.sc.getBombos().subscribe(
      data => {
        this.infoEquipo = data
        this.getClasificados()
      }
      )
  }

  getClasificados(){
    let clasificadosLS = localStorage.getItem('Clasificados de octavos')
    if (clasificadosLS) {

      let clasls = JSON.parse(clasificadosLS)

      this.clasificados = clasls

      this.injectBombo()
    } else{
      this.router.navigateByUrl('')
    }
  }

  injectBombo(){

    if (
      this.partidos.primerPartido.length != 2 &&
      this.partidos.segundoPartido.length != 2 &&
      this.partidos.terceroPartido.length != 2 &&
      this.partidos.cuartoPartido.length != 2
    ){
      //Primero se busca la informacion de ese equipo en los bombos de la data principal
    this.infoEquipo.bombo1.equipos.find(
      m => {
      if (m.name == this.clasificados.primerP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.segundoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.terceroP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.cuartoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.quintoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.sextoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.septimoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.octavoP.equipo) {
        this.bomboCuartos?.push(m)
      }}
      )

    this.infoEquipo.bombo2.equipos.find(
      m => {
      if (m.name == this.clasificados.primerP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.segundoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.terceroP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.cuartoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.quintoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.sextoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.septimoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.octavoP.equipo) {
        this.bomboCuartos?.push(m)
      }}
      )

    this.infoEquipo.bombo3.equipos.find(
      m => {
      if (m.name == this.clasificados.primerP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.segundoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.terceroP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.cuartoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.quintoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.sextoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.septimoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.octavoP.equipo) {
        this.bomboCuartos?.push(m)
      }}
      )

    this.infoEquipo.bombo4.equipos.find(
      m => {
      if (m.name == this.clasificados.primerP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.segundoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.terceroP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.cuartoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.quintoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.sextoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.septimoP.equipo) {
        this.bomboCuartos?.push(m)
      }else if (m.name == this.clasificados.octavoP.equipo) {
        this.bomboCuartos?.push(m)
      }}
      )
    }
  }

  sEquipo(){
    this.numEquipoRandom = Math.floor(Math.random() * (this.bomboCuartos.length))

    if (this.partidos.primerPartido.length<2) {
      this.partidos.primerPartido.push(this.bomboCuartos[this.numEquipoRandom])

    } else if (this.partidos.segundoPartido.length<2) {
      this.partidos.segundoPartido.push(this.bomboCuartos[this.numEquipoRandom])

    } else if (this.partidos.terceroPartido.length<2) {
      this.partidos.terceroPartido.push(this.bomboCuartos[this.numEquipoRandom])

    } else if (this.partidos.cuartoPartido.length<2) {
      this.partidos.cuartoPartido.push(this.bomboCuartos[this.numEquipoRandom])
    }

    this.bomboCuartos.splice(this.numEquipoRandom, 1)

    if (
      this.partidos.primerPartido.length > 1 &&
      this.partidos.segundoPartido.length > 1 &&
      this.partidos.terceroPartido.length > 1 &&
      this.partidos.cuartoPartido.length > 1
    ) {
    this.getEquiposForm()
    localStorage.setItem('Partidos de cuartos', JSON.stringify(this.partidos))
    }
  }

  getEquiposForm(){
    this.mostrarForm = true
  }

  //El evento submit del 1 form
  cuartosIdaResut(){
    let partido1: octPartido = {
      local: this.partidos.primerPartido[0].name,
      localimg: this.partidos.primerPartido[0].img,
      visitanteimg: this.partidos.primerPartido[1].img,
      visitante: this.partidos.primerPartido[1].name,
      golesl: this.cuartosPrimerPartido.controls['golespe'].value,
      golesv: this.cuartosPrimerPartido.controls['golesse'].value,
    }

    let partido2: octPartido = {
      local: this.partidos.segundoPartido[0].name,
      localimg: this.partidos.segundoPartido[0].img,
      visitanteimg: this.partidos.segundoPartido[1].img,
      visitante: this.partidos.segundoPartido[1].name,
      golesl: this.cuartosSegundoPartido.controls['golespe'].value,
      golesv: this.cuartosSegundoPartido.controls['golesse'].value,
    }

    let partido3: octPartido = {
      local: this.partidos.terceroPartido[0].name,
      localimg: this.partidos.terceroPartido[0].img,
      visitanteimg: this.partidos.terceroPartido[1].img,
      visitante: this.partidos.terceroPartido[1].name,
      golesl: this.cuartosTerceroPartido.controls['golespe'].value,
      golesv: this.cuartosTerceroPartido.controls['golesse'].value,
    }

    let partido4: octPartido = {
      local: this.partidos.cuartoPartido[0].name,
      localimg: this.partidos.cuartoPartido[0].img,
      visitanteimg: this.partidos.cuartoPartido[1].img,
      visitante: this.partidos.cuartoPartido[1].name,
      golesl: this.cuartosCuartoPartido.controls['golespe'].value,
      golesv: this.cuartosCuartoPartido.controls['golesse'].value,
    }

    this.cuartosPartidos.ida.push(partido1, partido2, partido3, partido4)

    this.mostrarResultado = true

    this.resultadosCuartos.priPartido.golesl = partido1.golesl
    this.resultadosCuartos.priPartido.golesv = partido1.golesv
    this.resultadosCuartos.segPartido.golesl = partido2.golesl
    this.resultadosCuartos.segPartido.golesv = partido2.golesv
    this.resultadosCuartos.terPartido.golesl = partido3.golesl
    this.resultadosCuartos.terPartido.golesv = partido3.golesv
    this.resultadosCuartos.cuarPartido.golesl = partido4.golesl
    this.resultadosCuartos.cuarPartido.golesv = partido4.golesv
  }

  //El evento submit del 2 form
  cuartosVueltaResult(){
    let partido1: octPartido = {
      local: this.partidos.primerPartido[1].name,
      localimg: this.partidos.primerPartido[1].img,
      visitanteimg: this.partidos.primerPartido[0].img,
      visitante: this.partidos.primerPartido[0].name,
      golesl: this.cuartosPrimerPartidoVuelta.controls['golespe'].value,
      golesv: this.cuartosPrimerPartidoVuelta.controls['golesse'].value,
    }

    let partido2: octPartido = {
      local: this.partidos.segundoPartido[1].name,
      localimg: this.partidos.segundoPartido[1].img,
      visitanteimg: this.partidos.segundoPartido[0].img,
      visitante: this.partidos.segundoPartido[0].name,
      golesl: this.cuartosSegundoPartidoVuelta.controls['golespe'].value,
      golesv: this.cuartosSegundoPartidoVuelta.controls['golesse'].value,
    }

    let partido3: octPartido = {
      local: this.partidos.terceroPartido[1].name,
      localimg: this.partidos.terceroPartido[1].img,
      visitanteimg: this.partidos.terceroPartido[0].img,
      visitante: this.partidos.terceroPartido[0].name,
      golesl: this.cuartosTerceroPartidoVuelta.controls['golespe'].value,
      golesv: this.cuartosTerceroPartidoVuelta.controls['golesse'].value,
    }

    let partido4: octPartido = {
      local: this.partidos.cuartoPartido[1].name,
      localimg: this.partidos.cuartoPartido[1].img,
      visitanteimg: this.partidos.cuartoPartido[0].img,
      visitante: this.partidos.cuartoPartido[0].name,
      golesl: this.cuartosCuartoPartidoVuelta.controls['golespe'].value,
      golesv: this.cuartosCuartoPartidoVuelta.controls['golesse'].value,
    }

    this.cuartosPartidos.vuelta.push(partido1, partido2, partido3, partido4)

    localStorage.setItem('Cuartos', JSON.stringify(this.cuartosPartidos))

    this.resultadoTotal()
  }

  getPartidosCuartos(){
    let partidosCuartos = localStorage.getItem('Partidos de cuartos')
    if (partidosCuartos) {
      this.partidos = JSON.parse(partidosCuartos)
      this.mostrarForm = true
    }
      this.bomboCuartos.slice(0, this.bomboCuartos.length)
  }

  ngOnInit(){
    this.getInfoEquipo()
    this.getPartidosCuartos()
  }

  //Evento que se ejecuta al final del segundo submit para obtener el resultado global
  //Traemos tambien la informacion completa de cada equipo
  resultadoTotal(){

    let partido1: globalPartido = {
      local: this.partidos.primerPartido[0].name,
      localimg: this.partidos.primerPartido[0].img,
      visitanteimg: this.partidos.primerPartido[1].img,
      visitante: this.partidos.primerPartido[1].name,
      golesl: this.cuartosPartidos.ida[0].golesl + this.cuartosPartidos.vuelta[0].golesv,
      golesv: this.cuartosPartidos.ida[0].golesv + this.cuartosPartidos.vuelta[0].golesl,
      infoEquipoL: this.partidos.primerPartido[0],
      infoEquipoV: this.partidos.primerPartido[1]
    }

    let partido2: globalPartido = {
      local: this.partidos.segundoPartido[0].name,
      localimg: this.partidos.segundoPartido[0].img,
      visitanteimg: this.partidos.segundoPartido[1].img,
      visitante: this.partidos.segundoPartido[1].name,
      golesl: this.cuartosPartidos.ida[1].golesl + this.cuartosPartidos.vuelta[1].golesv,
      golesv: this.cuartosPartidos.ida[1].golesv + this.cuartosPartidos.vuelta[1].golesl,
      infoEquipoL: this.partidos.segundoPartido[0],
      infoEquipoV: this.partidos.segundoPartido[1]
    }

    let partido3: globalPartido = {
      local: this.partidos.terceroPartido[0].name,
      localimg: this.partidos.terceroPartido[0].img,
      visitanteimg: this.partidos.terceroPartido[1].img,
      visitante: this.partidos.terceroPartido[1].name,
      golesl: this.cuartosPartidos.ida[2].golesl + this.cuartosPartidos.vuelta[2].golesv,
      golesv: this.cuartosPartidos.ida[2].golesv + this.cuartosPartidos.vuelta[2].golesl,
      infoEquipoL: this.partidos.terceroPartido[0],
      infoEquipoV: this.partidos.terceroPartido[1]
    }

    let partido4: globalPartido = {
      local: this.partidos.cuartoPartido[0].name,
      localimg: this.partidos.cuartoPartido[0].img,
      visitanteimg: this.partidos.cuartoPartido[1].img,
      visitante: this.partidos.cuartoPartido[1].name,
      golesl: this.cuartosPartidos.ida[3].golesl + this.cuartosPartidos.vuelta[3].golesv,
      golesv: this.cuartosPartidos.ida[3].golesv + this.cuartosPartidos.vuelta[3].golesl,
      infoEquipoL: this.partidos.cuartoPartido[0],
      infoEquipoV: this.partidos.cuartoPartido[1]
    }

    this.resultadosCuartos.priPartido.golesl = partido1.golesl
    this.resultadosCuartos.priPartido.golesv = partido1.golesv
    this.resultadosCuartos.segPartido.golesl = partido2.golesl
    this.resultadosCuartos.segPartido.golesv = partido2.golesv
    this.resultadosCuartos.terPartido.golesl = partido3.golesl
    this.resultadosCuartos.terPartido.golesv = partido3.golesv
    this.resultadosCuartos.cuarPartido.golesl = partido4.golesl
    this.resultadosCuartos.cuarPartido.golesv = partido4.golesv

    if (partido1.golesl > partido1.golesv) {
      this.cfClasificados.push(partido1.infoEquipoL)
    }else if (partido1.golesl < partido1.golesv) {
      this.cfClasificados.push(partido1.infoEquipoV)
    }

    if (partido2.golesl > partido2.golesv) {
      this.cfClasificados.push(partido2.infoEquipoL)
    }else if (partido2.golesl < partido2.golesv) {
      this.cfClasificados.push(partido2.infoEquipoV)
    }

    if (partido3.golesl > partido3.golesv) {
      this.cfClasificados.push(partido3.infoEquipoL)
    }else if (partido3.golesl < partido3.golesv) {
      this.cfClasificados.push(partido3.infoEquipoV)
    }

    if (partido4.golesl > partido4.golesv) {
      this.cfClasificados.push(partido4.infoEquipoL)
    }else if (partido4.golesl < partido4.golesv) {
      this.cfClasificados.push(partido4.infoEquipoV)
    }
    console.log(this.cfClasificados);

    localStorage.setItem('Clasificados de cuartos', JSON.stringify(this.cfClasificados))
  }


}

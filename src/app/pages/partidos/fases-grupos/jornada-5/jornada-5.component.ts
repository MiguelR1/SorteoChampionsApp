import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { fasesGrupos, partidos, resultados } from '../../../../interfaces/interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchampionService } from '../../../../services/schampion.service';

@Component({
  selector: 'app-jornada-5',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './jornada-5.component.html',
})
export class Jornada5Component implements OnInit{
  public fasesGrupos!: fasesGrupos;

  fb = inject(FormBuilder);

  route = inject(Router)

  public p1: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p2: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p3: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p4: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p5: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p6: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p7: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p8: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p9: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p10: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p11: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p12: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p13: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p14: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p15: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })
  public p16: FormGroup = this.fb.group({
    local: [0, [Validators.required]],
    visitante: [0, [Validators.required]]
  })

  getpartidosJ1(){
    let p1:partidos = {
      local: this.fasesGrupos.grupof1[0].name,
      localimg: this.fasesGrupos.grupof1[0].img,
      visitante: this.fasesGrupos.grupof1[1].name,
      visitanteimg: this.fasesGrupos.grupof1[1].img
    }

    let p2:partidos = {
      local: this.fasesGrupos.grupof1[2].name,
      localimg: this.fasesGrupos.grupof1[2].img,
      visitante: this.fasesGrupos.grupof1[3].name,
      visitanteimg: this.fasesGrupos.grupof1[3].img
    }

    let p3:partidos = {
      local: this.fasesGrupos.grupof2[0].name,
      localimg: this.fasesGrupos.grupof2[0].img,
      visitante: this.fasesGrupos.grupof2[1].name,
      visitanteimg: this.fasesGrupos.grupof2[1].img
    }

    let p4:partidos = {
      local: this.fasesGrupos.grupof2[2].name,
      localimg: this.fasesGrupos.grupof2[2].img,
      visitante: this.fasesGrupos.grupof2[3].name,
      visitanteimg: this.fasesGrupos.grupof2[3].img
    }

    let p5:partidos = {
      local: this.fasesGrupos.grupof3[0].name,
      localimg: this.fasesGrupos.grupof3[0].img,
      visitante: this.fasesGrupos.grupof3[1].name,
      visitanteimg: this.fasesGrupos.grupof3[1].img
    }

    let p6:partidos = {
      local: this.fasesGrupos.grupof3[2].name,
      localimg: this.fasesGrupos.grupof3[2].img,
      visitante: this.fasesGrupos.grupof3[3].name,
      visitanteimg: this.fasesGrupos.grupof3[3].img
    }

    let p7:partidos = {
      local: this.fasesGrupos.grupof4[0].name,
      localimg: this.fasesGrupos.grupof4[0].img,
      visitante: this.fasesGrupos.grupof4[1].name,
      visitanteimg: this.fasesGrupos.grupof4[1].img
    }

    let p8:partidos = {
      local: this.fasesGrupos.grupof4[2].name,
      localimg: this.fasesGrupos.grupof4[2].img,
      visitante: this.fasesGrupos.grupof4[3].name,
      visitanteimg: this.fasesGrupos.grupof4[3].img
    }

    let p9: partidos = {
      local: this.fasesGrupos.grupof5[0].name,
      localimg: this.fasesGrupos.grupof5[0].img,
      visitante: this.fasesGrupos.grupof5[1].name,
      visitanteimg: this.fasesGrupos.grupof5[1].img
    }

    let p10: partidos = {
      local: this.fasesGrupos.grupof5[2].name,
      localimg: this.fasesGrupos.grupof5[2].img,
      visitante: this.fasesGrupos.grupof5[3].name,
      visitanteimg: this.fasesGrupos.grupof5[3].img
    }

    let p11: partidos = {
      local: this.fasesGrupos.grupof6[0].name,
      localimg: this.fasesGrupos.grupof6[0].img,
      visitante: this.fasesGrupos.grupof6[1].name,
      visitanteimg: this.fasesGrupos.grupof6[1].img
    }

    let p12: partidos = {
      local: this.fasesGrupos.grupof6[2].name,
      localimg: this.fasesGrupos.grupof6[2].img,
      visitante: this.fasesGrupos.grupof6[3].name,
      visitanteimg: this.fasesGrupos.grupof6[3].img
    }

    let p13: partidos = {
      local: this.fasesGrupos.grupof7[0].name,
      localimg: this.fasesGrupos.grupof7[0].img,
      visitante: this.fasesGrupos.grupof7[1].name,
      visitanteimg: this.fasesGrupos.grupof7[1].img
    }

    let p14: partidos = {
      local: this.fasesGrupos.grupof7[2].name,
      localimg: this.fasesGrupos.grupof7[2].img,
      visitante: this.fasesGrupos.grupof7[3].name,
      visitanteimg: this.fasesGrupos.grupof7[3].img
    }

    let p15: partidos = {
      local: this.fasesGrupos.grupof8[0].name,
      localimg: this.fasesGrupos.grupof8[0].img,
      visitante: this.fasesGrupos.grupof8[1].name,
      visitanteimg: this.fasesGrupos.grupof8[1].img
    }

    let p16: partidos = {
      local: this.fasesGrupos.grupof8[2].name,
      localimg: this.fasesGrupos.grupof8[2].img,
      visitante: this.fasesGrupos.grupof8[3].name,
      visitanteimg: this.fasesGrupos.grupof8[3].img
    }

    this.partidosj5.push(
      p1, p2, p3,
      p4, p5, p6, p7, p8,
      p9, p10, p11, p12,
      p13, p14, p15, p16)

  }

  partidosj5:partidos[] = [];

  enviar() {
    this.resutadosj1.splice(0, 16)

  if (
      this.p1.touched &&
      this.p2.touched &&
      this.p3.touched &&
      this.p4.touched &&
      this.p5.touched &&
      this.p6.touched &&
      this.p7.touched &&
      this.p8.touched &&
      this.p9.touched &&
      this.p10.touched &&
      this.p11.touched &&
      this.p12.touched &&
      this.p13.touched &&
      this.p14.touched &&
      this.p15.touched &&
      this.p16.touched
      ) {

      // 1er partido
      let partido1 = {
        local: this.partidosj5[0].local,
        golesl: this.p1.controls['local'].value,
        visitante: this.partidosj5[0].visitante,
        golesv: this.p1.controls['visitante'].value,
      };

      // 2do partido
      let partido2 = {
        local: this.partidosj5[1].local,
        golesl: this.p2.controls['local'].value,
        visitante: this.partidosj5[1].visitante,
        golesv: this.p2.controls['visitante'].value,
      };

      // 3ero partido
      let partido3 = {
        local: this.partidosj5[2].local,
        golesl: this.p3.controls['local'].value,
        visitante: this.partidosj5[2].visitante,
        golesv: this.p3.controls['visitante'].value,
      };

      // 4to partido
      let partido4 = {
        local: this.partidosj5[3].local,
        golesl: this.p4.controls['local'].value,
        visitante: this.partidosj5[3].visitante,
        golesv: this.p4.controls['visitante'].value,
      };

      // 5to partido
      let partido5 = {
        local: this.partidosj5[4].local,
        golesl: this.p5.controls['local'].value,
        visitante: this.partidosj5[4].visitante,
        golesv: this.p5.controls['visitante'].value,
      };

      // 6to partido
      let partido6 = {
        local: this.partidosj5[5].local,
        golesl: this.p6.controls['local'].value,
        visitante: this.partidosj5[5].visitante,
        golesv: this.p6.controls['visitante'].value,
      };

      // 7to partido
      let partido7 = {
        local: this.partidosj5[6].local,
        golesl: this.p7.controls['local'].value,
        visitante: this.partidosj5[6].visitante,
        golesv: this.p7.controls['visitante'].value,
      };

      // 8vo partido
      let partido8 = {
        local: this.partidosj5[7].local,
        golesl: this.p8.controls['local'].value,
        visitante: this.partidosj5[7].visitante,
        golesv: this.p8.controls['visitante'].value,
      };

      // 9no partido
      let partido9 = {
        local: this.partidosj5[8].local,
        golesl: this.p9.controls['local'].value,
        visitante: this.partidosj5[8].visitante,
        golesv: this.p9.controls['visitante'].value,
      };

      // 10to partido
      let partido10 = {
        local: this.partidosj5[9].local,
        golesl: this.p10.controls['local'].value,
        visitante: this.partidosj5[9].visitante,
        golesv: this.p10.controls['visitante'].value,
      };

      // 11vo partido
      let partido11 = {
        local: this.partidosj5[10].local,
        golesl: this.p11.controls['local'].value,
        visitante: this.partidosj5[10].visitante,
        golesv: this.p11.controls['visitante'].value,
      };

      // 12vo partido
      let partido12 = {
        local: this.partidosj5[11].local,
        golesl: this.p12.controls['local'].value,
        visitante: this.partidosj5[11].visitante,
        golesv: this.p12.controls['visitante'].value,
      };

      // 13vo partido
      let partido13 = {
        local: this.partidosj5[12].local,
        golesl: this.p13.controls['local'].value,
        visitante: this.partidosj5[12].visitante,
        golesv: this.p13.controls['visitante'].value,
      };

      // 14 partido
      let partido14 = {
        local: this.partidosj5[13].local,
        golesl: this.p14.controls['local'].value,
        visitante: this.partidosj5[13].visitante,
        golesv: this.p14.controls['visitante'].value,
      };

      // 15vo partido
      let partido15 = {
        local: this.partidosj5[14].local,
        golesl: this.p15.controls['local'].value,
        visitante: this.partidosj5[14].visitante,
        golesv: this.p15.controls['visitante'].value,
      };

      // 16vo partido
      let partido16 = {
        local: this.partidosj5[15].local,
        golesl: this.p16.controls['local'].value,
        visitante: this.partidosj5[15].visitante,
        golesv: this.p16.controls['visitante'].value,
      };

      this.resutadosj1.push(
        partido1,partido2,partido3,
        partido4,partido5,partido6,
        partido7,partido8,partido9,
        partido10,partido11,partido12,
        partido13,partido14,partido15,
        partido16
      );
      console.log(this.resutadosj1);

      localStorage.setItem('Jornada 5', JSON.stringify(this.resutadosj1))

      this.sc.emitirFGrupo(5)
    } else{
        alert('Tiene que completar todos los campos para poder ser enviados.')
    }

  }

  sc = inject(SchampionService)

  resutadosj1: resultados[] = [];

  ngOnInit(): void {
    this.getfgrupos()

    this.getpartidosJ1()
  }

  getfgrupos(){
    let data = localStorage.getItem('Fases de grupos')
    if (data) {
      this.fasesGrupos = JSON.parse(data)
    } else{
      this.route.navigateByUrl('/dashboard/sorteo')
    }
  }
 }

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Jornada1Component } from './fases-grupos/jornada-1/jornada-1.component';
import { Jornada2Component } from './fases-grupos/jornada-2/jornada-2.component';
import { Jornada3Component } from './fases-grupos/jornada-3/jornada-3.component';
import { Jornada6Component } from './fases-grupos/jornada-6/jornada-6.component';
import { Jornada5Component } from './fases-grupos/jornada-5/jornada-5.component';
import { Jornada4Component } from './fases-grupos/jornada-4/jornada-4.component';
import { TablaFgruposComponent } from './tabla-fgrupos/tabla-fgrupos.component';
@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [
    CommonModule,
    Jornada1Component,
    Jornada2Component,
    Jornada3Component,
    Jornada4Component,
    Jornada5Component,
    Jornada6Component,
    TablaFgruposComponent
  ],
  templateUrl: './partidos.component.html',
})
export class PartidosComponent {


 }

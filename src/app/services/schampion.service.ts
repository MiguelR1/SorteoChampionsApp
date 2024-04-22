import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Bombos, Equipo, fasesGrupos } from '../interfaces/interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchampionService {

  bombo1: Equipo[] = [];
  bombo2: Equipo[] = [];
  bombo3: Equipo[] = [];
  bombo4: Equipo[] = [];

  fasesGrupos:fasesGrupos = {
    grupof1: [],
    grupof2: [],
    grupof3: [],
    grupof4: [],
    grupof5: [],
    grupof6: [],
    grupof7: [],
    grupof8: []
  };

  http = inject(HttpClient);

  getBombos():Observable<Bombos>{
    return this.http.get<Bombos>('../../assets/data/data.json')
  }

  private numeroBomboS = new Subject<number>();
  public bomboN$ = this.numeroBomboS.asObservable();

  nBombo(bombo:number){
    this.numeroBomboS.next(bombo);
  }

  private faseGrupo = new Subject<number>();
  cargarfGrupo = this.faseGrupo.asObservable();

  emitirFGrupo(number:number){
    this.faseGrupo.next(number)
  }

  constructor() { }

}

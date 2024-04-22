
export interface Bombos {
  bombo1: Bombo;
  bombo2: Bombo;
  bombo3: Bombo;
  bombo4: Bombo;
}

export interface Bombo {
  numero:  number;
  equipos: Equipo[];
}

export interface Equipo {
  id:    string;
  name:   string;
  img:    string;
  league: string;
  partidos: number;
  puntos: number;
}

export interface fasesGrupos {
  grupof1: Equipo[];
  grupof2: Equipo[];
  grupof3: Equipo[];
  grupof4: Equipo[];
  grupof5: Equipo[];
  grupof6: Equipo[];
  grupof7: Equipo[];
  grupof8: Equipo[];
}

export interface partidos {
  local: string,
  visitante: string,
  localimg?: string,
  visitanteimg?: string
}

export interface resultados {
  local: string,
  visitante: string,
  golesl: number,
  golesv: number
}

export interface koEquipo {
  id:    string;
  name:   string;
  img:    string;
  league: string;
}

export interface koPartido {
  partido1: koEquipo[]
  partido2: koEquipo[]
  partido3: koEquipo[]
  partido4: koEquipo[]
  partido5: koEquipo[]
  partido6: koEquipo[]
  partido7: koEquipo[]
  partido8: koEquipo[]
}

export interface kospartidos {
  ida: octPartido[];
  vuelta: octPartido[];
}

export interface octPartido {
  local: string;
  localimg: string | undefined;
  golesl: number;
  visitante: string;
  visitanteimg: string | undefined;
  golesv: number;
}

export interface globalPartido {
  local: string;
  localimg: string | undefined;
  golesl: number;
  visitante: string;
  visitanteimg: string | undefined;
  golesv: number;
  infoEquipoL: Equipo;
  infoEquipoV: Equipo;
}

export interface cuartosPartido {
  primerPartido: Equipo[]
  segundoPartido: Equipo[]
  terceroPartido: Equipo[]
  cuartoPartido: Equipo[]
}

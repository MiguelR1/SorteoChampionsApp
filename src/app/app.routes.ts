import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/nav/nav.component')
      .then(c => c.NavComponent),
    children:[
      {
        path:'home',
        title: 'Home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path:'ver-bombos',
        title: 'Bombos',
        loadComponent: () => import('./pages/ver-bombos/ver-bombos.component').then(c=>c.VerBombosComponent)
      },
      {
        path:'sorteo',
        title:'Empezar sorteo',
        loadComponent: () => import('./pages/sorteo/sorteo.component').then(c => c.SorteoComponent)
      },
      {
        path:'ver-equipos',
        title:'Ver equipos',
        loadComponent: () => import('./pages/ver-equipos/ver-equipos.component').then(c => c.VerEquiposComponent)
      },
      {
        path:'partidos',
        title:'Partidos',
        loadComponent: () => import('./pages/partidos/partidos.component').then(c => c.PartidosComponent)
      },
      {
        path:'octavos-finales',
        title:'Octavos de final',
        loadComponent: () => import('./pages/partidos/eliminatorias/octavos-final/octavos.component').then(c => c.KOsComponent)
      },
      {
        path: 'eliminatorias-finales',
        title: 'Eliminatorias Finales',
        loadComponent: () => import('./pages/partidos/eliminatorias/cuartos-final/cuartos-final.component').then(m => m.CuartosFinalComponent)
      },
      {
        path: 'semis-final',
        title: 'Semis y Fase Final',
        loadComponent: () => import('./pages/partidos/eliminatorias/semis-final/semis-final.component').then(m => m.SemisFinalComponent)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];

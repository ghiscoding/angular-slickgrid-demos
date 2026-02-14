import { type Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'example01', loadComponent: () => import('./examples/example01.component').then((m) => m.Example1Component) },
  { path: 'example02', loadComponent: () => import('./examples/example02.component').then((m) => m.Example2Component) },
  { path: 'example03', loadComponent: () => import('./examples/example03.component').then((m) => m.Example3Component) },
  { path: '', redirectTo: '/example01', pathMatch: 'full' },
  { path: '**', redirectTo: '/example01', pathMatch: 'full' },
];

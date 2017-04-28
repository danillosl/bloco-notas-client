import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { NotaComponent } from './nota/nota.component';
import {NotaFormComponent} from './nota/nota-form/nota-form.component';
import {NotaViewComponent} from './nota/nota-view/nota-view.component';


const appRoutes: Routes = [
  { path: 'notas', pathMatch: 'full', component: NotaComponent },
  { path: 'notas/novo', component: NotaFormComponent },
  { path: 'notas/:id', component: NotaFormComponent },
  { path: 'notas/visualizar/:id', component: NotaViewComponent },

  { path: '**', redirectTo: 'notas' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
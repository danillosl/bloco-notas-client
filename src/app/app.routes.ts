import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { NotaComponent } from './nota/nota.component';
import {NotaFormComponent} from './nota/nota-form/nota-form.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: NotaComponent },
  { path: 'notas/:id', component: NotaFormComponent },
  { path: 'notas/novo', component: NotaFormComponent },

  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
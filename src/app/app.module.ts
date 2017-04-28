import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotaComponent } from './nota/nota.component';
import { NotaFormComponent } from './nota/nota-form/nota-form.component';

import {NotaService} from './nota/nota.service';

import { routing } from './app.routes';
import { NotaViewComponent } from './nota/nota-view/nota-view.component'

@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    NotaFormComponent,
    NotaViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [NotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

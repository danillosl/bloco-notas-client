import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NotaService {

  private url: string = "http://localhost:3000/notas";

  constructor(private http: Http) { }

  getNotas(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getNota(id){
    return this.http.get(this.getNotaUrl(id))
      .map(res => res.json());
  }

  addNota(nota){
    return this.http.post(this.url, JSON.stringify(nota))
      .map(res => res.json());
  }

  updateNota(nota){
    return this.http.put(this.getNotaUrl(nota.id), JSON.stringify(nota))
      .map(res => res.json());
  }

  deleteNota(id){
    return this.http.delete(this.getNotaUrl(id))
      .map(res => res.json());
  }

  private getNotaUrl(id){
    return this.url + "/" + id;
  }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Nota } from './nota';

@Injectable()
export class NotaService {

  private url: string = "http://10.1.1.61:3000/notas";

  constructor(private http: Http) { }

  getNotas() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getNota(id) {
    return this.http.get(this.getNotaUrl(id))
      .map(res => res.json());
  }

  getStatus() {
    return this.http.get(`${this.url}/status`)
      .map(res => res.json());
  }

  addNota(nota: Nota) {
    return this.http.post(this.url, nota.getMapped())
      .map(res => res.json());
  }

  updateNota(nota) {
    return this.http.put(this.getNotaUrl(nota.id), nota.getMapped())
      .map(res => res.json());
  }

  deleteNota(id) {
    return this.http.delete(this.getNotaUrl(id))
      .map(res => res.json());
  }

  searchNota(search: string) {
    return this.http.get(`${this.url}/search/${search}`)
      .map(res => res.json());

  }

  private getNotaUrl(id) {
    return this.url + "/" + id;
  }
}
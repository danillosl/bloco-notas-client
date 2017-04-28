import { Component, OnInit } from '@angular/core';
import { NotaService } from "./nota.service";
import { Nota } from "./nota";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Router } from '@angular/router';


@Component({
  selector: 'nota-component',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  notas: Nota[] = [];

  private searchTerms = new Subject<string>();


  constructor(private notaService: NotaService, private router: Router) { }

  ngOnInit() {
    this.notaService.getNotas()
      .subscribe(notas => {
        this.notas = notas.map(nota => new Nota(nota));
      });

    this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.notaService.searchNota(term))
      .subscribe(notas => this.notas = notas.length > 0 ? notas.map(nota => new Nota(nota)) : this.notas)
  }

  deletar(nota: Nota) {
    this.notaService.deleteNota(nota.id).subscribe(
      sucesso => {
        this.notas = this.notas.filter(pNota => pNota.id !== nota.id)
        console.log(`nota deletada com sucesso: ${sucesso}, ${nota.id}`);

      },
      erro => {
        console.log(`erro ao deletar a nota ${erro}`);
      }
    );
  }

  search(event): void {
    this.searchTerms.next(event.target.value);
  }

}

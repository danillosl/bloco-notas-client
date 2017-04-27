import { Component, OnInit } from '@angular/core';
import { NotaService } from "./nota.service";
import { Nota } from "./nota";

@Component({
  selector: 'nota-component',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  notas: Nota[] = [];

  constructor(private notaService: NotaService) { }

  ngOnInit() {
    this.notaService.getNotas()
    .subscribe(notas => {
      this.notas = notas.map(nota => new Nota(nota));
      console.log("notas");
    });
  }

}

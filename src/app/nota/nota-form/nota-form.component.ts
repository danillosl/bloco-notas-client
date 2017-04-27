import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotaService } from '../nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-nota-form',
  templateUrl: './nota-form.component.html',
  styleUrls: ['./nota-form.component.css']
})
export class NotaFormComponent implements OnInit {
  titulo: string;
  nota: Nota = new Nota();
  statusList: string[] = ["ativa","inativa", "rascunho"];

  constructor(
    private notaService: NotaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  print(){
    console.log(this.nota);
  }

  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.titulo = id ? 'Editar Nota' : 'Nova Nota';

      if (!id)
        return;

      this.notaService.getNota(id)
        .subscribe(
        nota => {
          this.nota = new Nota(nota);
        },
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }

}

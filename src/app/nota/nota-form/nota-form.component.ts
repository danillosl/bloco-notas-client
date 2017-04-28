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
  statusList: string[] = [];
  erros: string[] =[];

  constructor(
    private notaService: NotaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }



  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.titulo = id ? 'Editar Nota' : 'Nova Nota';

      this.notaService.getStatus().subscribe(
        status => this.statusList = status
      );

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

  salvar() {

    this.erros = this.nota.validar();

    if(this.erros.length !== 0)
    return;

    console.log(this.nota);
    if (this.nota.id) {
      this.atualizar();
    } else {
      this.criar();
    }
  }

  criar() {
    this.notaService.addNota(this.nota).subscribe(
      nota => {
        console.log(`nota ${nota} salva com sucesso`);
        this.router.navigate(['notas']);
      },
      error => {
        console.log(`Erro ao salvar a nota! ${error}`);
        this.router.navigate(['notas']);
      }

    )
  }

  atualizar() {
    this.notaService.updateNota(this.nota).subscribe(
      nota => {
        console.log(`nota atualizada com sucesso`);
        this.router.navigate(['notas']);
      },
      error => {
        console.log(`Erro ao salvar a nota! ${error}`)
        this.router.navigate(['notas']);

      }

    )
  }

}

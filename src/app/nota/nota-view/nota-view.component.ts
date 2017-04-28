import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotaService } from '../nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-nota-view',
  templateUrl: './nota-view.component.html',
  styleUrls: ['./nota-view.component.css']
})
export class NotaViewComponent implements OnInit {

  nota: Nota = new Nota();

    constructor(
    private notaService: NotaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
      var id = params['id'];



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

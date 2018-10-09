import { Component } from '@angular/core';

import { TransformeSeService } from './../providers/transforme-se.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filtraGarantia = false;
  filtroPrincipal = 'destaques';
  tema = 'Todos';
  produtos = [];

  constructor(private service: TransformeSeService) {
    this.produtos = service.initData();
  }

  mudaFiltroGarantia() {
    this.filtraGarantia = !this.filtraGarantia;
  }
  mudaFiltroPrincipal(filtro) {
    this.filtroPrincipal = filtro;
  }
}

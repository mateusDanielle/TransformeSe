import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TransformeSeService {

  public produtos = [];

  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'assets/data/v2/';
  }

  initData() {
    this.produtos.push({
      'Nome': 'Dieta dos 21 dias',
      'Imagem': 'https://via.placeholder.com/350x200',
      'Estrelas': 4,
      'Valor': 2,
      'Garantia': true
    });
    this.produtos.push({
      'Nome': 'Projeto fit 60 dias',
      'Imagem': 'https://via.placeholder.com/350x200',
      'Estrelas': 3.2,
      'Valor': 1,
      'Garantia': false
    });
    return this.produtos;
    /*
    return this.http.get(this.baseUrl  + 'produtos', {}, {})
    .then(data => {
      console.log(data.status);
      console.log(data.data);
      console.log(data.headers);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error);
      console.log(error.headers);
    });
    */
  }
}

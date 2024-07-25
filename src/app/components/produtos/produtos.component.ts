import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos = [
    {nome: "Mochila", preco: 130},
    {nome: "Notebook", preco: 3750},
    {nome: "Camisa", preco: 200},
    {nome: "Brinquedo", preco: 80},
    {nome: "Cadeira", preco: 95},
    {nome: "Televisão", preco: 3800},
  ]

  constructor(private cartService: CartService) {}

  adicionarAoCarrinho(produto:Produto) {
    this.cartService.adicionarAoCarrinho(produto)
    this.cartService.somaItems()
  }
}

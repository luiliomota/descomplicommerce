import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Items:Array<Produto> = []
  ItemsFilter:Array<Produto> = []

  constructor() { }

  adicionarAoCarrinho(produto:Produto) {
    this.Items.push(produto)
    if(this.ItemsFilter.includes(produto)){
    } else {
      this.ItemsFilter.push(produto)
    }
  }

  getItems() {
    return this.Items
  }

  getItemsFilter() {
    return this.ItemsFilter
  }

  somaItems() {
    let soma =  0
    this.Items.forEach((item) => soma += item.preco)
    return soma
  }

  limparItems() {
    this.ItemsFilter.length = 0
    this.Items.length = 0
  }

}

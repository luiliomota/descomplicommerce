import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  items:Array<Produto> = []
  itemsFilter:Array<Produto> = []
  soma:number = 0

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems()
    this.itemsFilter = this.cartService.getItemsFilter()
  }

  limparItems() {
    this.cartService.limparItems();
  }

  somaItems() {
    return this.cartService.somaItems();
  }

  contarProdutosRepetidos(produtos:Array<Produto>, produto:String) {
    let contador:number = 0;
    produtos.forEach((item) => item.nome === produto ? contador += 1 : contador);
    return contador;
  }
}

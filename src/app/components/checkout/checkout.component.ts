import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public produtos: any[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.produtos = history.state.produtos;
  }

  public getSubtotal(): number {
    let total = 0;
    this.produtos.forEach((produto) => {
      total += produto.preco;
    });
    return total;
  }

}

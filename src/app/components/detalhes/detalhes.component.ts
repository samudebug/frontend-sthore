import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'app/services/produtos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  private produto: any;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private produtoService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.getProduto();
  }


  private getProduto() {
    this.route.params.subscribe(async (params) => {
      this.produto = await this.produtoService.getProduto(parseInt(params['id'])).toPromise();
    });
  }

  public goCheckout() {
    this.router.navigateByUrl('/checkout', {state: {produtos: [this.produto]}});
  }

}

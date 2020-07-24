import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'app/services/produtos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private produtos: any;

  constructor(private produtoService:ProdutosService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  private async getProdutos(limit?: number, page?: number) {
    this.produtos = await this.produtoService.getProdutos(limit, page).toPromise();
  }

  public getFotoPreview(produto) {
    return produto.fotos[0].linkFoto;
  }

}

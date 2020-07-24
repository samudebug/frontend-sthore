import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtosUrl = 'http://localhost:3000/produto';

  constructor(private http:HttpClient) { }

  public getProdutos(limit?: number, page?: number): Observable<any> {
    let query = '?';
    if (limit) {
      query += `limit=${limit}&`;
    }
    if (page) {
      query += `page=${page}`;
    }
    return this.http.get<any>(`${this.produtosUrl}/${query}`);
  }

  public getProduto(id:number): Observable<any> {
    return this.http.get<any>(`${this.produtosUrl}/${id}`);
  }
}

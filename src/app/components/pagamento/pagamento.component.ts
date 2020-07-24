import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let navbar = document.getElementsByTagName('app-navbar')[0];

    navbar.removeChild(navbar.children[0]);
  }

}

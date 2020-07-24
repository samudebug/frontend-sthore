import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { EntregaComponent } from './components/pagamento/entrega/entrega.component';
import { CartaoComponent } from './components/pagamento/cartao/cartao.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: HomepageComponent },
    { path: 'produto/:id', component: DetalhesComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'pagamento', component: PagamentoComponent, 
        children: [
            { path: 'entrega', component: EntregaComponent },
            { path: 'cartao', component: CartaoComponent }
        ] }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }

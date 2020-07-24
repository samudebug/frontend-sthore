import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { EntregaComponent } from './pagamento/entrega/entrega.component';
import { CartaoComponent } from './pagamento/cartao/cartao.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        
      ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        HomepageComponent,
        DetalhesComponent,
        CheckoutComponent,
        PagamentoComponent,
        EntregaComponent,
        CartaoComponent
    ],
    exports:[ ComponentsComponent, HomepageComponent, DetalhesComponent ]
})
export class ComponentsModule { }

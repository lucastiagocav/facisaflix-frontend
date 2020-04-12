import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';
import { MenuPrincipalComponent } from './components/menu-principal/components/menu-principal/menu-principal.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PainelPrincipalComponent, MenuPrincipalComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
  ]
})
export class PrivateModule { }

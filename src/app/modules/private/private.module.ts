import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuPrincipalComponent } from './components/menu-principal/components/menu-principal/menu-principal.component';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PainelPrincipalComponent, MenuPrincipalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrivateRoutingModule,
    NgxSpinnerModule,
  ]
})
export class PrivateModule { }

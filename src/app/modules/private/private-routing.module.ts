import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';

const routes: Routes = [
  {
    path: 'menu',
    component: PainelPrincipalComponent,
    children: [
      {
        path: 'facisaflix',
        loadChildren: './../private/components/menu-principal/menu-principal.module#MenuPrincipalModule'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeButtonDirective } from './shared-directives/like-button.directive';
import { DeslikeButtonDirective } from './shared-directives/deslike-button.directive';
import { TypeMonthDirective } from './shared-directives/typemonth.directive';



@NgModule({
  declarations: [LikeButtonDirective, DeslikeButtonDirective, TypeMonthDirective],
  imports: [
    CommonModule
  ],
  exports: [
    LikeButtonDirective,
    DeslikeButtonDirective,
    TypeMonthDirective
  ]
})
export class SharedModule { }

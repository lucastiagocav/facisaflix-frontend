import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeButtonDirective } from './shared-directives/like-button.directive';
import { DeslikeButtonDirective } from './shared-directives/deslike-button.directive';



@NgModule({
  declarations: [LikeButtonDirective, DeslikeButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [
    LikeButtonDirective,
    DeslikeButtonDirective
  ]
})
export class SharedModule { }

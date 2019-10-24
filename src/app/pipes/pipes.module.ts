import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupArrayPipe } from './group-array.pipe';

@NgModule({
  declarations: [
    GroupArrayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroupArrayPipe
  ]
})
export class PipesModule { }

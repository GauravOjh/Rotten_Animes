import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StarComponent
  ],
  exports:[StarComponent]
})
export class FeatureModule { }

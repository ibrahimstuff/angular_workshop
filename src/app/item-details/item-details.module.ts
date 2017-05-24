import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemDetailsComponent],
  exports: [ItemDetailsComponent]
})
export class ItemDetailsModule { }

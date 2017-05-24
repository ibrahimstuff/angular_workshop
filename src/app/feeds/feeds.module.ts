import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { ItemComponent } from './item/item.component';
import { PipesModule } from './../shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  declarations: [FeedComponent, ItemComponent],
  exports: [FeedComponent]
})
export class FeedsModule { }

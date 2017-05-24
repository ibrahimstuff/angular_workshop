import { FeedComponent } from './feeds/feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news/1',
    pathMatch: 'full'
  },
  {
    path: 'news/:page',
    component: FeedComponent,
    data: { feedType: 'news'}
  },
  {
    path: 'newest/:page',
    component: FeedComponent,
    data: { feedType: 'newest'}
  },
  {
    path: 'show/:page',
    component: FeedComponent,
    data: { feedType: 'show'}
  },
  {
    path: 'ask/:page',
    component: FeedComponent,
    data: { feedType: 'ask'}
  },
  {
    path: 'jobs/:page',
    component: FeedComponent,
    data: { feedType: 'jobs'}
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'news/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

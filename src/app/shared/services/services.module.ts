import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* Services */
import { HackernewsApiService } from './hackernews-api.service';

@NgModule({
  imports: [
    HttpModule
  ]
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        HackernewsApiService
      ]
    };
  }
}

export {
  HackernewsApiService
}

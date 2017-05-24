import { ItemDetailsModule } from './item-details/item-details.module';
/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* Third-party Modules */

/* My Modules */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FeedsModule } from './feeds/feeds.module';
import { ServicesModule } from './shared/services/services.module';


/* My Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeedsModule,
    ItemDetailsModule,
    ServicesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './web-components/details/details.component';
import { GraphicComponent } from './web-components/graphic/graphic.component';
import { HomeComponent } from './web-components/home/home.component';
import { WebComponentsComponent } from './web-components/web-components.component';


@NgModule({
  declarations: [
    AppComponent,
    WebComponentsComponent,
    HomeComponent,
    DetailsComponent,
    GraphicComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

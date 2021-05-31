import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { SlideComponent } from './components/slide.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

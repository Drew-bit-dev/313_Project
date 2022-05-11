import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumpBoxComponent } from './jump-box/jump-box.component';
import { HeaderComponent } from './header/header.component';
import { BioPageComponent } from './bio-page/bio-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JumpBoxComponent,
    HeaderComponent,
    BioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

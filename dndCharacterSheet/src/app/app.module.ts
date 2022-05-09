import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListboxComponent } from './listbox/listbox.component';
import { PlayerCreationComponent } from './player-creation/player-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListboxComponent,
    PlayerCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

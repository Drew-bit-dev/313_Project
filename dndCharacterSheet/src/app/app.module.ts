import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListboxComponent } from './listbox/listbox.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlayerCreationComponent } from './player-creation/player-creation.component';
import { PopupComponent } from './popup/popup.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { StatsBubbleComponent } from './stats-bubble/stats-bubble.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { SpeedComponent } from './speed/speed.component';

@NgModule({
  declarations: [
    AppComponent,
    ListboxComponent,
    HeaderComponent,
    MainPageComponent,
    PlayerCreationComponent,
    PopupComponent,
    CharacterViewComponent,
    StatsBubbleComponent,
    InitiativeComponent,
    SpeedComponent
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

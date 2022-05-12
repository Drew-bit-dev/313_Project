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
import { BioPageComponent } from './bio-page/bio-page.component';
import { JumpBoxComponent } from './jump-box/jump-box.component';
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { StatsBubbleComponent } from './stats-page/stats-bubble/stats-bubble.component';
import { InitiativeComponent } from './stats-page/initiative/initiative.component';
import { SpeedComponent } from './stats-page/speed/speed.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { ProficiencyComponent } from './stats-page/proficiency/proficiency.component';
import { HitpointsComponent } from './stats-page/hitpoints/hitpoints.component';
import { ArmorClassComponent } from './stats-page/armor-class/armor-class.component';
import { DeathSavesComponent } from './stats-page/death-saves/death-saves.component';
import { HitDiceComponent } from './stats-page/hit-dice/hit-dice.component';

// Firebase
// WHY DOESNT THIS IMPORT!!!!!
import { HttpClientModule } from '@angular/common/http';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListboxComponent,
    HeaderComponent,
    MainPageComponent,
    PlayerCreationComponent,
    PopupComponent,
    CharacterViewComponent,
    JumpBoxComponent,
    HeaderComponent,
    BioPageComponent,
    ItemSelectorComponent,
    StatsBubbleComponent,
    InitiativeComponent,
    SpeedComponent,
    StatsPageComponent,
    ProficiencyComponent,
    HitpointsComponent,
    ArmorClassComponent,
    DeathSavesComponent,
    HitDiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  	// AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

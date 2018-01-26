import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { BoardGraphemeComponent } from "./board-grapheme/board-grapheme.component";
import { DictationComponent } from "./dictation/dictation.component";
import { GraphemeComponent } from "./grapheme/grapheme.component";
import { WordGraphemeComponent } from "./word-grapheme/word-grapheme.component";
import { WordImgComponent } from "./word-img/word-img.component";
import { WordComponent } from "./word/word.component";
import { RoundedImgComponent } from "./rounded-img/rounded-img.component";
import { IconButtonComponent } from "./icon-button/icon-button.component";
import { RevealButtonComponent } from "./reveal-button/reveal-button.component";
import { BoardSwitchComponent } from "./board-switch/board-switch.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChildImgComponent } from "./child-img/child-img.component";
import { ChildComponent } from "./child/child.component";
import { AdminChildComponent } from "./admin-child/admin-child.component";
import { LevelSelectorComponent } from "./level-selector/level-selector.component";
import { ConfigComponent } from "./config/config.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminConfigComponent } from "./admin-config/admin-config.component";

import { GraphemeService } from "./grapheme/grapheme.service";
import { WordGraphemeService } from "./word-grapheme/word-grapheme.service";
import { WordService } from "./word/word.service";
import { SoundService } from "./sound/sound.service";
import { ChildService } from "./child/child.service";
import { ConfigService } from "./config/config.service";

import { DroppableDirective } from "./dnd/droppable.directive";
import { DraggableDirective } from "./dnd/draggable.directive";

@NgModule({
  declarations: [
    AppComponent,
    BoardGraphemeComponent,
    DictationComponent,
    GraphemeComponent,
    WordGraphemeComponent,
    WordImgComponent,
    WordComponent,
    RoundedImgComponent,
    IconButtonComponent,
    RevealButtonComponent,
    DroppableDirective,
    DraggableDirective,
    BoardSwitchComponent,
    DashboardComponent,
    ChildImgComponent,
    ChildComponent,
    AdminChildComponent,
    LevelSelectorComponent,
    ConfigComponent,
    AdminComponent,
    AdminConfigComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [
    GraphemeService,
    WordGraphemeService,
    WordService,
    SoundService,
    ChildService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

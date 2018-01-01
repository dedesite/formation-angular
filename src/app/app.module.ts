import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BoardGraphemeComponent } from "./board-grapheme/board-grapheme.component";
import { DictationComponent } from "./dictation/dictation.component";
import { GraphemeComponent } from "./grapheme/grapheme.component";
import { WordGraphemeComponent } from "./word-grapheme/word-grapheme.component";
import { WordImgComponent } from "./word-img/word-img.component";
import { WordComponent } from "./word/word.component";
import { RoundedImgComponent } from './rounded-img/rounded-img.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { RevealButtonComponent } from './reveal-button/reveal-button.component';

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
    RevealButtonComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

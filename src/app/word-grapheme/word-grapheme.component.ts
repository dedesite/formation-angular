import { Component, Input, EventEmitter, Output } from "@angular/core";

import { GraphemeComponent } from "../grapheme/grapheme.component";
import { Grapheme } from "../grapheme/grapheme.model";
import { WordGrapheme } from "./word-grapheme.model";

@Component({
  selector: "word-grapheme",
  templateUrl: "./word-grapheme.component.html",
  styleUrls: [
    "./word-grapheme.component.css",
    "../grapheme/grapheme.component.css"
  ]
})
export class WordGraphemeComponent extends GraphemeComponent {
  @Input() grapheme: WordGrapheme;
  @Output() founded: EventEmitter<WordGrapheme> = new EventEmitter();

  playPhonemSound() {
    if (!this.grapheme.isMute) {
      return super.playPhonemSound();
    }
    return Promise.resolve();
  }

  onDrop(droppedGrapheme: any, wordGrapheme: WordGrapheme) {
    // @todo find a way to properly cast Json object to TypeScript instances
    if (droppedGrapheme._representation === wordGrapheme.representation) {
      wordGrapheme.isFound = true;
      this.soundService.playSound("juste").then(() => {
        this.founded.emit(wordGrapheme);
      });
    } else {
      this.soundService.playSound("faux");
    }
  }
}

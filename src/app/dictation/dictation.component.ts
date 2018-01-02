import { Component, OnInit } from "@angular/core";

import { Grapheme } from "../grapheme/grapheme.model";
import {
  GraphemeService,
  LanguageGraphemes
} from "../grapheme/grapheme.service";
import { SoundService } from "../sound/sound.service";
import { Word } from "../word/word.model";
import { WordService } from "../word/word.service";

@Component({
  selector: "dictation",
  templateUrl: "./dictation.component.html",
  styleUrls: ["./dictation.component.css"]
})
export class DictationComponent implements OnInit {
  currentWord: Word;
  words: Word[];
  currentChild = "child";
  graphemes: LanguageGraphemes;
  boardGraphemes: Grapheme[];

  constructor(
    private graphemeService: GraphemeService,
    private wordService: WordService,
    private soundService: SoundService
  ) {}

  ngOnInit() {
    this.graphemes = this.graphemeService.getGraphemes();
    this.boardGraphemes = [
      ...this.graphemes.vowels,
      ...this.graphemes.consonants
    ];
    this.wordService.getWords().subscribe(words => {
      this.words = words;
      this.setRandomCurrentWord();
    });
  }

  setRandomCurrentWord() {
    const pos = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[pos];
    this.soundService.playSound(`words/${this.currentWord.fileName}`);
  }

  graphemeRow(num: number) {
    const rowLength = 11;
    const start = num * rowLength;
    return this.boardGraphemes.slice(start, start + rowLength);
  }
}

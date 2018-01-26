import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Grapheme } from "../grapheme/grapheme.model";
import { GraphemeType } from "../grapheme/grapheme-type.model";
import {
  GraphemeService,
  LanguageGraphemes
} from "../grapheme/grapheme.service";
import { SoundService } from "../sound/sound.service";
import { Word } from "../word/word.model";
import { WordService } from "../word/word.service";
import { ChildService } from "../child/child.service";
import { Child } from "../child/child.model";
import { ConfigService } from "../config/config.service";
import { Config } from "../config/config.model";

@Component({
  selector: "dictation",
  templateUrl: "./dictation.component.html",
  styleUrls: ["./dictation.component.css"]
})
export class DictationComponent implements OnInit {
  currentChild: Child;
  currentConfig: Config;
  currentWord: Word;
  words: Word[];
  graphemes: LanguageGraphemes;
  boardGraphemes: Grapheme[];
  boardGraphemesType: GraphemeType = GraphemeType.simple;

  constructor(
    private graphemeService: GraphemeService,
    private wordService: WordService,
    private childService: ChildService,
    private soundService: SoundService,
    private configService: ConfigService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !== null) {
      this.childService.getChild(+id).subscribe(child => {
        this.currentChild = child;
        // TODO : get child's config inside childService
        this.configService
          .getConfig(child.configId)
          .subscribe(config => (this.currentConfig = config));
      });
    }

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

  switchBoardGraphemes() {
    if (this.boardGraphemesType === GraphemeType.simple) {
      this.boardGraphemes = this.graphemes.complexes;
      this.boardGraphemesType = GraphemeType.complex;
    } else {
      this.boardGraphemes = [
        ...this.graphemes.vowels,
        ...this.graphemes.consonants
      ];
      this.boardGraphemesType = GraphemeType.simple;
    }
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

  onWordFound(word: Word) {
    this.setRandomCurrentWord();
  }
}

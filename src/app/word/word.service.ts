import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { Word } from "./word.model";
import { WordGrapheme } from "../word-grapheme/word-grapheme.model";
import { WordGraphemeService } from "../word-grapheme/word-grapheme.service";

type wordsDesc = {
  words: string[][];
};

@Injectable()
export class WordService {
  constructor(
    private wordGraphemeService: WordGraphemeService,
    private http: HttpClient
  ) {}

  private createWordFromDescription(wordDesc) {
    const wordGr: WordGrapheme[] = [];

    for (let desc of wordDesc) {
      wordGr.push(this.wordGraphemeService.createFromDescription(desc));
    }
    return new Word(wordGr);
  }
  getWords(): Observable<Word[]> {
    return this.http.get<wordsDesc>("/assets/data/words-fr.json").map(data => {
      return data.words.map(wordDesc => {
        return this.createWordFromDescription(wordDesc);
      });
    });
  }
}

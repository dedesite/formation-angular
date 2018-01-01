import { Injectable } from "@angular/core";

import { Grapheme } from "./grapheme.model";

import { GRAPHEMES } from "./graphemes-fr.data";

export type LanguageGraphemes = {
  vowels: Grapheme[];
  consonants: Grapheme[];
  complexes: Grapheme[];
};

@Injectable()
export class GraphemeService {
  private createGrapheme(type, representation) {
    let phonems;
    if (GRAPHEMES.multipleSoundsGraphemes[representation] != null) {
      phonems = GRAPHEMES.multipleSoundsGraphemes[representation];
    } else {
      phonems = [representation];
    }
    return new Grapheme(type, phonems, representation);
  }

  getGraphemes() {
    const graphemes: LanguageGraphemes = {
      vowels: [],
      consonants: [],
      complexes: []
    };

    GRAPHEMES.vowels.forEach(representation => {
      graphemes.vowels.push(this.createGrapheme("vowel", representation));
    });

    GRAPHEMES.consonants.forEach(representation => {
      graphemes.consonants.push(
        this.createGrapheme("consonant", representation)
      );
    });

    GRAPHEMES.complexes.forEach(representation => {
      graphemes.complexes.push(this.createGrapheme("complex", representation));
    });

    return graphemes;
  }
}

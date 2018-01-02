import { Component, Input } from "@angular/core";

import { Word } from "./word.model";

@Component({
  selector: "word",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.css"]
})
export class WordComponent {
  @Input() word: Word;
}

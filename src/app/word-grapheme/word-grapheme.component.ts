import { Component } from "@angular/core";

import { GraphemeComponent } from "../grapheme/grapheme.component";

@Component({
  selector: "word-grapheme",
  template: "{{representation}}",
  styleUrls: [
    "./word-grapheme.component.css",
    "../grapheme/grapheme.component.css"
  ]
})
export class WordGraphemeComponent extends GraphemeComponent {}

import { Component, Input } from "@angular/core";

import { GraphemeComponent } from "../grapheme/grapheme.component";

@Component({
  selector: "board-grapheme",
  templateUrl: "./board-grapheme.component.html",
  styleUrls: [
    "./board-grapheme.component.css",
    "../grapheme/grapheme.component.css"
  ]
})
export class BoardGraphemeComponent extends GraphemeComponent {
  @Input() type: string;
}

import { Component, Input } from "@angular/core";

import { Grapheme } from "./grapheme.model";

@Component({
  selector: "grapheme",
  template: "{{grapheme.representation}}",
  styleUrls: ["./grapheme.component.css"]
})
export class GraphemeComponent {
  @Input() grapheme: Grapheme;
}

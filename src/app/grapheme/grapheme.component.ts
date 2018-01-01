import { Component, Input } from "@angular/core";

@Component({
  selector: "grapheme",
  template: "{{representation}}",
  styleUrls: ["./grapheme.component.css"]
})
export class GraphemeComponent {
  @Input() representation: string;
}

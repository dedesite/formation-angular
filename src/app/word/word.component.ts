import { Component, Input } from "@angular/core";

@Component({
  selector: "word",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.css"]
})
export class WordComponent {
  @Input() word: string;
}

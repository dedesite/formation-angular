import { Component, Input } from "@angular/core";

import { Grapheme } from "./grapheme.model";
import { SoundService } from "../sound/sound.service";

@Component({
  selector: "grapheme",
  templateUrl: "./grapheme.component.html",
  styleUrls: ["./grapheme.component.css"]
})
export class GraphemeComponent {
  @Input() grapheme: Grapheme;

  constructor(protected soundService: SoundService) {}

  playPhonemSound() {
    return this.soundService.playSound(`phonems/${this.grapheme.phonems[0]}`);
  }
}

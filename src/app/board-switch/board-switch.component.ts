import { Component, Input, Output, EventEmitter } from "@angular/core";

import { GraphemeType } from "../grapheme/grapheme-type.model";

@Component({
  selector: "board-switch",
  templateUrl: "./board-switch.component.html"
})
export class BoardSwitchComponent {
  _graphemeType: GraphemeType;

  @Input()
  set graphemeType(graphemeType: GraphemeType) {
    this._graphemeType = graphemeType;
    if (this._graphemeType === GraphemeType.simple) {
      this.text = "Ou, Oi, Eau";
      this.arrowOrientation = "right";
    } else {
      this.text = "a, â, e";
      this.arrowOrientation = "left";
    }
  }
  get graphemeType(): GraphemeType {
    return this._graphemeType;
  }

  @Output() switch: EventEmitter<void> = new EventEmitter();

  text: string = "Ou, Oi, Eau";
  arrowOrientation: string = "right";

  constructor() {}

  switchBoard() {
    this.switch.emit();
  }
}

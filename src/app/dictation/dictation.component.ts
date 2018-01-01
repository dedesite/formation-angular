import { Component } from "@angular/core";

@Component({
  selector: "dictation",
  templateUrl: "./dictation.component.html",
  styleUrls: ["./dictation.component.css"]
})
export class DictationComponent {
  currentWord = "pamplemousse";
  currentChild = "child";
  boardGraphemes = Array.from("aeéèêiïîoôuybcçdfghjklmnpqrstvwxz");

  graphemeRow(num: number) {
    const rowLength = 11;
    const start = num * rowLength;
    return this.boardGraphemes.slice(start, start + rowLength);
  }
}

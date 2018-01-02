import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  word = "pamplemousse";
  boardGraphemes = Array.from("aeéèêiïîoôuybcçdfghjklmnpqrstvwxz");

  graphemeRow(num: number) {
    const rowLength = 11;
    const start = num * rowLength;
    return this.boardGraphemes.slice(start, start + rowLength);
  }
}
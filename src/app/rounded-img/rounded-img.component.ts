import { Component, Input } from "@angular/core";

@Component({
  selector: "rounded-img",
  templateUrl: "./rounded-img.component.html",
  styleUrls: ["./rounded-img.component.css"]
})
export class RoundedImgComponent {
  @Input() name: string;
}

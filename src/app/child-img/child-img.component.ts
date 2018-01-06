import { Component, Input } from "@angular/core";

@Component({
  selector: "child-img",
  templateUrl: "./child-img.component.html",
  styleUrls: ["./child-img.component.css"]
})
export class ChildImgComponent {
  @Input() name: string;
  @Input() link: string;
  constructor() {}
}

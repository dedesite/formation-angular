import { Component, Input } from "@angular/core";

@Component({
  selector: "icon-button",
  templateUrl: "./icon-button.component.html",
  styles: [""]
})
export class IconButtonComponent {
  @Input() name: string;
  @Input() text: string;
}

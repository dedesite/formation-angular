import { Component } from "@angular/core";

import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "reveal-button",
  templateUrl: "../icon-button/icon-button.component.html",
  styleUrls: ["./reveal-button.component.css"]
})
export class RevealButtonComponent extends IconButtonComponent {
  name = "eye";
}

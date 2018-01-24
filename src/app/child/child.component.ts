import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Child, ChildLevel } from "./child.model";
import { ChildService } from "./child.service";

@Component({
  selector: "child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input()
  child: Child = {
    // Server determines the id
    id: -1,
    name: "",
    level: ChildLevel.petit,
    attemptCount: 0,
    successCount: 0
  };

  submitMsg: string = "Créer";

  constructor(
    private route: ActivatedRoute,
    private childService: ChildService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.childService.getChild(+id).subscribe(child => {
        this.child = child;
        this.submitMsg = "Modifier";
      });
    }
  }

  create() {
    this.childService.addChild(this.child).subscribe(child => {
      this.goBack();
    });
  }

  save() {
    this.childService.saveChild(this.child).subscribe(child => {
      this.goBack();
    });
  }

  onSubmit() {
    if (this.child.id !== -1) {
      this.save();
    } else {
      this.create();
    }
  }

  goBack(): void {
    this.location.back();
  }
}

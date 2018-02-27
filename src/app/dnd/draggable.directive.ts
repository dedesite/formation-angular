import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appDraggable]"
})
export class DraggableDirective {
  @Input() data: any;

  constructor(private el: ElementRef) {
    this.el.nativeElement.draggable = "true";
  }

  // Set up the dragstart event and add the drag-src CSS class
  // to change the visual appearance.
  @HostListener("dragstart", ["$event"])
  onDragStart(e) {
    this.el.nativeElement.classList.add("drag-src");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", JSON.stringify(this.data));
  }

  // Remove the drag-src class
  @HostListener("dragend", ["$event"])
  onDragEnd(e) {
    e.preventDefault();
    this.el.nativeElement.classList.remove("drag-src");
  }
}

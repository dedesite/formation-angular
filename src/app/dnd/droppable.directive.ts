import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
  selector: "[appDroppable]"
})
/**
 * Adaptation of Mithun Patel's work
 * https://github.com/mithun-daa/ng2_dnd
 */
export class DroppableDirective {
  @Output() dropped: EventEmitter<any> = new EventEmitter();

  constructor(el: ElementRef) {
    let nativeEl = el.nativeElement;

    // Add a style to indicate that this element is a drop target
    nativeEl.addEventListener("dragenter", e => {
      nativeEl.classList.add("over");
    });

    // Remove the style
    nativeEl.addEventListener("dragleave", e => {
      nativeEl.classList.remove("over");
    });

    nativeEl.addEventListener("dragover", e => {
      e.preventDefault();

      e.dataTransfer.dropEffect = "move";
      return false;
    });

    // On drop, get the data and convert it back to a JSON object
    // and fire off an event passing the data
    nativeEl.addEventListener("drop", e => {
      e.preventDefault();
      nativeEl.classList.remove("over");
      let data = JSON.parse(e.dataTransfer.getData("text"));
      this.dropped.emit(data);
      return false;
    });
  }
}

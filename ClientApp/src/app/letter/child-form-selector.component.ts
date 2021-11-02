import { EventEmitter, Input } from "@angular/core";
import { Component, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  template: "",
})
export abstract class ChildFormSelectorComponent<T> {
  fb: FormGroup;

  @Output()
  formInit = new EventEmitter<FormGroup>();

  @Input()
  selecteItem?: T;

  isSelected(selector: T) {
    return this.selecteItem == selector;
  }
}

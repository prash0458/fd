import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { LetterRequest } from "src/app/models/letter-request";
import { ChildFormSelectorComponent } from "../child-form-selector.component";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent extends ChildFormSelectorComponent<LetterRequest> {
  form: FormGroup;

  constructor() {
    super();
  }
}

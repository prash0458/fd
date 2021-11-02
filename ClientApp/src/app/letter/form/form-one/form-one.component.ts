import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-one",
  templateUrl: "./form-one.component.html",
  styleUrls: ["./form-one.component.css"],
})
export class FormOneComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form;
  }

  ngOnInit() {}
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormOneComponent } from "./form/form-one/form-one.component";
import { LetterComponent } from "./letter.component";
import { LetterRoutingModule } from "./letter-routing.module";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormOneComponent, LetterComponent, FormComponent],
  imports: [CommonModule, LetterRoutingModule],
})
export class LetterModule {}

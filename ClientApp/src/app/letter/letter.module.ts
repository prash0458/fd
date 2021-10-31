import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormOneComponent } from "./form/form-one/form-one.component";
import { LetterComponent } from "./letter.component";
import { LetterRoutingModule } from "./letter-routing.module";

@NgModule({
  declarations: [FormOneComponent, LetterComponent],
  imports: [CommonModule, LetterRoutingModule],
})
export class LetterModule {}

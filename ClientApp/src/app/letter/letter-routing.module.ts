import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LetterComponent } from "./letter.component";

const routes: Routes = [
  { path: "", component: LetterComponent },
  {
    path: ":id",
    component: LetterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetterRoutingModule {}

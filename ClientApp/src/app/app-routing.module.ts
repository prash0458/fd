import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { CategoryComponent } from "./category/category.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";
import { LetterModule } from "./letter/letter.module";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "letter",
    loadChildren: () =>
      import("./letter/letter.module").then((m) => m.LetterModule),
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "counter", component: CounterComponent },
  { path: "fetch-data", component: FetchDataComponent },
  { path: "category", component: CategoryComponent },
  { path: "book", component: BookComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

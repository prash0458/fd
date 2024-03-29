import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpHeaders,
} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { CategoryComponent } from "./category/category.component";
import { BookComponent } from "./book/book.component";
import { LetterModule } from "./letter/letter.module";
import { AppRoutingModule } from "./app-routing.module";

//import { HttpHeaders, HttpClient } from '@anglar/common/http';
//import { StoreModule } from "@ngrx/store";
//import { counterReducer } from "./counter/counter.reducer";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CategoryComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LetterModule,

    //-------------
    //StoreModule.forRoot({ count: counterReducer }),
    //-------------
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

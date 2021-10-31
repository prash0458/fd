import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Book } from "../models/book";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getList();
  }

  bookList: Book[] = [];

  getList() {
    this.bookService.getList().subscribe((res) => {
      console.log(res);
      this.bookList = res as Book[];
    });
  }
}

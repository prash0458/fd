import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "../models/book";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get<Book[]>(`https://localhost:5001/api/books`);
  }
}

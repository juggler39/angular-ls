import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.sass'],
})
export class BookShelfComponent implements OnInit {
  books$!: Observable<Book[]>;
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.books$ = this.libraryService.loadBooks();
  }
}

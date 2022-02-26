import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryService } from '../services/library.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books$!: Observable<Book[]>;
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.books$ = this.libraryService.loadBooks();
  }
}

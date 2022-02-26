import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass'],
})
export class BookComponent implements OnInit {
  @Input()
  book!: Book;

  constructor() {}

  ngOnInit(): void {}
}

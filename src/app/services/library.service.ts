import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(private http: HttpClient) {}

  loadBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>('https://reader.lightsailed.com/api/es?take=10')
      .pipe(shareReplay());
  }
}

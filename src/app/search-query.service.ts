import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryService {
  constructor() {};

  private query = new Subject<string>();

  sendQuery(query: string): void {
    this.query.next(query);
  }

  getQueries(): Observable<string> {
    return this.query.asObservable();
  }
}


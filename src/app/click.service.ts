import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  constructor() { }

  private click= new Subject<string>();

  sendClick(tagName: string): void {
    this.click.next(tagName);
  }

  getClicks(): Observable<string> {
    return this.click.asObservable();
  }
}

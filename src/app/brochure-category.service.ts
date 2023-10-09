import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrochureCategoryService {
  constructor() {};

  private category = new Subject<string>();

  sendCategory(categoryName: string): void {
    this.category.next(categoryName);
  }

  getCategories(): Observable<string> {
    return this.category.asObservable();
  }
}


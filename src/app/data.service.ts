import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private messageSource = new BehaviorSubject<object>(null);
  currentMessage = this.messageSource.asObservable();
  changeMessage(obj: object) {
    this.messageSource.next(obj);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private inputSub = new BehaviorSubject<string>('');
  input$ = this.inputSub.asObservable();

  constructor() { }

  updateInput(value : string) {
    this.inputSub.next(value);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private _name = 'orange';

  get name(): Observable<string> {
    return new BehaviorSubject(this._name)
  }

  constructor() {}
}

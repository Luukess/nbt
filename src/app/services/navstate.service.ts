import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavstateService {
  constructor() { }

  isNavAccess = new BehaviorSubject<boolean>(false);

  handleIsAccessState(newState: boolean) {
    this.isNavAccess.next(newState);
  }

  currentIsAccessState() {
    let currentValue;
    this.isNavAccess.subscribe(status => currentValue = status);
    return currentValue;
  }

}

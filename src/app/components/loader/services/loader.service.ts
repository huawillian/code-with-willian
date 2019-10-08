import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum LoaderAction {
  Show,
  Hide
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderChangeObs = new Subject<LoaderAction>();

  public get updates() {
    return this.loaderChangeObs.asObservable();
  }

  constructor() { }

  updateLoader(action: LoaderAction) {
    this.loaderChangeObs.next(action);
  }
}

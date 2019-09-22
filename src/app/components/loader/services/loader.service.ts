import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderConfig {
  type: LoaderType,
  animate: boolean 
}

export enum LoaderType {
  Init,
  Show,
  Hide
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderChangeObs = new Subject<LoaderConfig>();

  public get updates() {
    return this.loaderChangeObs.asObservable();
  }

  constructor() { }

  updateLoader(config: LoaderConfig) {
    this.loaderChangeObs.next(config);
  }
}

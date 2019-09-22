import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackgroundParallaxConfig } from '../background-parallax.component';

@Injectable({
  providedIn: 'root'
})
export class BackgroundParallaxService {
  private backgroundChangeObs = new Subject<BackgroundParallaxConfig>();

  public get updates() {
    return this.backgroundChangeObs.asObservable();
  }

  constructor() { }

  updateBackground(config: BackgroundParallaxConfig) {
    this.backgroundChangeObs.next(config);
  }
}

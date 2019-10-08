import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LoaderService, LoaderAction } from '../components/loader/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultResolverService implements Resolve<any> {
  constructor(private loaderService: LoaderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loaderService.updateLoader(LoaderAction.Show);
    return of(true).pipe(
      delay(500),
      tap(() => {
        this.loaderService.updateLoader(LoaderAction.Hide);
      })
    );
  }
}

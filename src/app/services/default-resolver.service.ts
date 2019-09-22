import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LoaderService, LoaderType } from '../components/loader/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultResolverService implements Resolve<any> {
  constructor(private loaderService: LoaderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loaderService.updateLoader({
      type: LoaderType.Show,
      animate: true
    });
    return of(true).pipe(
      delay(300),
      tap(() => {
        this.loaderService.updateLoader({
          type: LoaderType.Hide,
          animate: true
        });
      })
    );
  }
}

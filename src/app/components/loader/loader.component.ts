import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {
  showLogo = false;
  fadeOut = false;
  animate = false;
  smil = false;
  hide = false;
  fadeIn = false;

  constructor() { }

  ngOnInit(): void {
    this.smil = window['Modernizr'].smil;
  }

  public hideLoader(withFade?: boolean) {
    this.fadeOut = withFade ? true : false;
    this.fadeIn = false;
    this.toggleScrollLock(false);

    setTimeout(() => {
      this.hide = true;
    }, 1000);
  }

  public showLoader(withFade?: boolean) {
    this.fadeOut = false;
    this.fadeIn = withFade ? true : false;
    this.hide = false;
    this.toggleScrollLock(true);
  }

  public initLoader(animate = true) {
    if (this.smil && animate) {
      setTimeout(() => {
        this.showLogo = true;
        this.animate = true;
      }, 1000);

      setTimeout(() => {
        this.hideLoader(true);
      }, 4300);

      setTimeout(() => {
        this.animate = false;
      }, 5000);
    } else if (animate) {
      setTimeout(() => {
        this.showLogo = true;
      }, 1000);

      setTimeout(() => {
        this.hideLoader(true);
      }, 2500);
    } else {
      this.hideLoader();
    }
  };

  public toggleScrollLock(lock?: boolean) {
    if (lock !== undefined) {
      if (lock) {
        document.body.classList.remove('loaded');
      } else {
        document.body.classList.add('loaded');
      }
    } else {
      document.body.classList.toggle('loaded');
    }
  }
}

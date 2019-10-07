import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderService, LoaderType } from './services/loader.service';

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
  init = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.smil = window['Modernizr'].smil;

    this.loaderService.updates.subscribe((config) => {
      if(config.type === LoaderType.Init) {
        this.initLoader(config.animate);
      } else if(this.init === true) {
        if(config.type === LoaderType.Show) {
          this.showLoader(config.animate);
        } else if(config.type === LoaderType.Hide){
          this.hideLoader(config.animate);
        }
      }
    });
  }

  public hideLoader(withFade?: boolean) {
    this.fadeOut = withFade ? true : false;
    this.fadeIn = false;
    setTimeout(() => {
      this.hide = true;
    }, 1000);
  }

  public showLoader(withFade?: boolean) {
    this.showLogo = false;
    this.fadeOut = false;
    this.fadeIn = withFade ? true : false;
    this.hide = false;
  }

  public initLoader(animate = true) {
    if(!window.sessionStorage.getItem('hideSplash')) {
      if (this.smil && animate) {
        setTimeout(() => {
          this.showLogo = true;
          this.animate = true;
        }, 1000);
  
        setTimeout(() => {
          this.toggleScrollLock(false);
          this.hideLoader(true);
          window.sessionStorage.setItem('hideSplash', 'true');
          this.init = true;
        }, 4300);
  
        setTimeout(() => {
          this.animate = false;
        }, 5000);
      } else if (animate) {
        setTimeout(() => {
          this.showLogo = true;
        }, 1000);
  
        setTimeout(() => {
          this.toggleScrollLock(false);
          this.hideLoader(true);
          window.sessionStorage.setItem('hideSplash', 'true');
          this.init = true;
        }, 2500);
      } else {
        this.toggleScrollLock(false);
        this.hideLoader();
        window.sessionStorage.setItem('hideSplash', 'true');
        this.init = true;
      }
    } else {
      this.toggleScrollLock(false);
      this.init = true;
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

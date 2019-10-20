import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { Router, ActivationStart } from '@angular/router';

export interface BackgroundParallaxConfig {
  src: string;
  filter: string;
}

@Component({
  selector: 'app-background-parallax',
  templateUrl: './background-parallax.component.html',
  styleUrls: ['./background-parallax.component.scss']
})
export class BackgroundParallaxComponent implements OnInit, OnDestroy {
  @ViewChild('bgImg1', { static: true }) bgImg1;
  @ViewChild('bgImg2', { static: true }) bgImg2;
  private scrollSubscription: Subscription;
  private isRaf = false;

  bgImgSrc1: string;
  bgImgSrc2: string;
  imgSwitch = true;
  filterStyle: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof ActivationStart) {
        if (event.snapshot.data.bgSrc && event.snapshot.data.bgFilter) {
          this.show({
            src: event.snapshot.data.bgSrc,
            filter: event.snapshot.data.bgFilter
          });
        }
      }
    });
    this.handleScroll();

    this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
      if (!this.isRaf) {
        this.isRaf = true;
        window.requestAnimationFrame(this.handleScroll.bind(this));
      }
    });
  }

  handleScroll() {
    if (this.isRaf) {
      this.bgImg1.nativeElement.style.transform = `translateY(-${window.scrollY / 3}px)`;
      this.bgImg2.nativeElement.style.transform = `translateY(-${window.scrollY / 3}px)`;
      this.isRaf = false;
    }
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  show(config: BackgroundParallaxConfig) {
    if (this.imgSwitch) {
      this.bgImgSrc1 = config.src;
    } else {
      this.bgImgSrc2 = config.src;
    }
    this.filterStyle = config.filter;
    this.imgSwitch = !this.imgSwitch;
  }

}

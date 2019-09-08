import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('bgImg', { static: true }) bgImg;
  private scrollSubscription: Subscription;
  private isRaf = false;

  public codingExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
    this.handleScroll();

    this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
      if(!this.isRaf) {
        this.isRaf = true;
        window.requestAnimationFrame(this.handleScroll.bind(this));
      }
    });
  }

  handleScroll() {
    if(this.isRaf) {
      this.bgImg.nativeElement.style.transform = `translateY(-${window.scrollY / 3}px)`;
      this.isRaf = false;
    }
  }

  expandCode() {
    this.codingExpanded = true;
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }
}

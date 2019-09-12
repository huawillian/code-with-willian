import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('bgImg', { static: true }) bgImg;
  private scrollSubscription: Subscription;
  private isRaf = false;

  constructor() { }

  ngOnInit() {
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
      this.bgImg.nativeElement.style.transform = `translateY(-${window.scrollY / 3}px)`;
      this.isRaf = false;
    }
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }
}

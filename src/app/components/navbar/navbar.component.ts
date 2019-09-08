import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public expanded: boolean = false;
  public showNavbarBg: boolean = false;
  private isRaf: boolean = false;

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.expanded = false;
    });

    fromEvent(window, 'click').subscribe((event) => {
      if (this.expanded && !this.isChildElement(event.target, this.elementRef.nativeElement)) {
        this.expanded = false;
      }
    });
    this.handleScroll();

    fromEvent(window, 'scroll').subscribe(() => {
      if (!this.isRaf) {
        this.isRaf = true;
        window.requestAnimationFrame(this.handleScroll.bind(this));
      }
    });
  }

  handleScroll() {
    if (this.isRaf) {
      this.showNavbarBg = window.scrollY > 100;
      this.isRaf = false;
    }
  }

  private isChildElement(childEl, parentEl): boolean {
    let currEl = childEl;

    do {
      if (currEl === parentEl) {
        return true;
      } else {
        currEl = currEl.parentNode;
      }
    } while (currEl);

    return false;
  }

  public toggle() {
    this.expanded = !this.expanded;
  }

}

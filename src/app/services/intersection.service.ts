import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionService {
  private intersectionObserver: IntersectionObserver;

  constructor() { }

  public init() {
    if (IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver(this.intersectionHandler.bind(this), {
        rootMargin: "-50px"
      });
    }
  }

  private intersectionHandler(entries) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        this.intersectionObserver.unobserve(entries[0].target);
        this.addSeenClass(entry.target);
      }
    });
  }

  private addSeenClass(el) {
    el.classList.add('seen');
  }

  public observe(el) {
    if(this.intersectionObserver) {
      this.intersectionObserver.observe(el);
    }
  }
}

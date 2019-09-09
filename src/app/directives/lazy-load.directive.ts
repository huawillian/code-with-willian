import { Directive, OnInit, ElementRef } from '@angular/core';
import { IntersectionService } from '../services/intersection.service';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit {
  
  constructor(private intersectionService: IntersectionService, private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    this.intersectionService.observe(this.elementRef.nativeElement);
  }
}

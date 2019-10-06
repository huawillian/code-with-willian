import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-resume-banner',
  templateUrl: './resume-banner.component.html',
  styleUrls: ['./resume-banner.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('true', style({
        opacity: 1
      })),
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('1000ms ease-in-out', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ResumeBannerComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  ngOnInit() {
    if(!window.localStorage.getItem('hideResumeBanner')) {
      setTimeout(() => {
        this.show = true;
      }, 3000);
    }
  }

  public closeResumeBanner() {
    this.show = false;
    window.localStorage.setItem('hideResumeBanner', 'true');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-banner',
  templateUrl: './resume-banner.component.html',
  styleUrls: ['./resume-banner.component.scss']
})
export class ResumeBannerComponent implements OnInit {
  public show: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  public closeResumeBanner() {
    this.show = false;
  }
}

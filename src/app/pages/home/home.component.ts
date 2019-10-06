import { Component, OnInit } from '@angular/core';
import { BackgroundParallaxService } from '../../components/background-parallax/services/background-parallax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public codingExpanded: boolean = false;

  constructor(private backgroundParallaxService: BackgroundParallaxService) { }

  ngOnInit() {
    this.backgroundParallaxService.updateBackground({
      src: '/assets/dev-bg.jpg',
      filter: 'rgba(0, 0, 0, 0.7)'
    });
  }

  expandCode() {
    this.codingExpanded = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { BackgroundParallaxService } from '../../components/background-parallax/services/background-parallax.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private backgroundParallaxService: BackgroundParallaxService) { }

  ngOnInit() {
    this.backgroundParallaxService.updateBackground({
      src: '/assets/contact-bg.jpg',
      filter: 'rgba(30, 30, 30, 0.8)'
    });
  }
}

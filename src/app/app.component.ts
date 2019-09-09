import { Component, OnInit } from '@angular/core';
import { IntersectionService } from './services/intersection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-with-willian';

  constructor(private intersectionService: IntersectionService) { }

  ngOnInit(): void {
    this.intersectionService.init();
  }
}

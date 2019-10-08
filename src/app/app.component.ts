import { Component, OnInit, ViewChild } from '@angular/core';
import { IntersectionService } from './services/intersection.service';
import { LoaderService } from './components/loader/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-with-willian';
  @ViewChild('loader', { static: true }) loaderRef;

  constructor(private intersectionService: IntersectionService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.intersectionService.init();
  }
}

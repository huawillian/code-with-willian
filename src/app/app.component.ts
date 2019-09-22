import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IntersectionService } from './services/intersection.service';
import { LoaderService, LoaderType } from './components/loader/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'code-with-willian';
  @ViewChild('loader', { static: true }) loaderRef;

  constructor(private intersectionService: IntersectionService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.intersectionService.init();
  }

  ngAfterViewInit(): void {
    this.loaderService.updateLoader({
      type: LoaderType.Init,
      animate: true
    });
  }
}

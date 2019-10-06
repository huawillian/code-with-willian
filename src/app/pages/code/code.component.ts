import {
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { BackgroundParallaxService } from "../../components/background-parallax/services/background-parallax.service";
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"]
})
export class CodeComponent implements OnInit {
  @ViewChild("bgImg", { static: true }) bgImg;
  public items: any = [];
  public filterCriteria: string = 'All';
  public gridCssClass = 'orange';

  constructor(
    private backgroundParallaxService: BackgroundParallaxService,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.backgroundParallaxService.updateBackground({
      src: "/assets/blog-bg.jpg",
      filter: "rgba(30, 30, 30, 0.8)"
    });

    this.articlesService.getArticles().subscribe((items) => {
      this.items = items;
    });
  }

  filter(criteria) {
    this.filterCriteria = criteria;
  }
}

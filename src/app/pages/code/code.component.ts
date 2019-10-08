import { Component, OnInit, ViewChild } from "@angular/core";
import { BackgroundParallaxService } from "../../components/background-parallax/services/background-parallax.service";
import { ArticlesService } from "../../services/articles.service";
import { ThemeColor, ArticleType } from '../../common/app.constants';

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"]
})
export class CodeComponent implements OnInit {
  @ViewChild("bgImg", { static: true }) bgImg;
  public items: any = [];
  public filterCriteria: string = "All";
  public gridCssClass = ThemeColor.ORANGE;
  public filters = [];

  constructor(
    private backgroundParallaxService: BackgroundParallaxService,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.backgroundParallaxService.updateBackground({
      src: "/assets/blog-bg.jpg",
      filter: "rgba(30, 30, 30, 0.8)"
    });

    this.articlesService.getArticles(ArticleType.CODE).subscribe(items => {
      this.items = items;
      this.filters = this.filtersFromItems(items);
    });
  }

  filtersFromItems(items) {
    const filtersObj = items.reduce((acc, item) => {
      acc[item.category] = true;
      return acc;
    }, {});
    const result = Object.keys(filtersObj);
    result.unshift("All");
    return result;
  }

  filter(criteria) {
    this.filterCriteria = criteria;
  }
}

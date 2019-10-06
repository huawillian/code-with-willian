import { Component, OnInit, ViewChild } from "@angular/core";
import { BackgroundParallaxService } from "../../components/background-parallax/services/background-parallax.service";
import { ArticlesService } from "../../services/articles.service";
import { ThemeColor, ArticleType } from "../../common/app.constants";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  @ViewChild("bgImg", { static: true }) bgImg;
  public items: any = [];
  public filterCriteria: string = "All";
  public gridCssClass = ThemeColor.GREEN;
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

    this.articlesService.getArticles(ArticleType.PROJECT).subscribe(items => {
      this.items = items;
      this.filters = this.filtersFromItems(items);
    });
  }

  filtersFromItems(items) {
    const filtersObj = items.reduce((acc, item) => {
      const tagsArr = item.tags.split(",").map(tag => tag.trim());
      tagsArr.forEach(tag => {
        acc[tag] = true;
      });
      return acc;
    }, {});
    delete filtersObj["All"];
    const result = Object.keys(filtersObj);
    result.unshift("All");
    return result;
  }

  filter(criteria) {
    this.filterCriteria = criteria;
  }
}

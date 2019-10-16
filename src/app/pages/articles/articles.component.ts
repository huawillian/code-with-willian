import { Component, OnInit } from "@angular/core";
import { BackgroundParallaxService } from "../../components/background-parallax/services/background-parallax.service";
import { ArticlesService } from "../../services/articles.service";
import {
  ThemeColor,
  QueryResponseItem,
  ArticlesRouteData,
  ArticlesQueryFields
} from "../../common/app.constants";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"]
})
export class ArticlesComponent implements OnInit {
  items: Array<QueryResponseItem<ArticlesQueryFields>> = [];
  filterCriteria: string = "All";
  gridCssClass: ThemeColor;
  filters = [];
  routeBasePath: string;
  title: string;
  btnCssClass: ThemeColor;
  failed = false;

  constructor(
    private backgroundParallaxService: BackgroundParallaxService,
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data as ArticlesRouteData;
    this.title = data.title;
    this.btnCssClass = data.btnCssClass;
    this.gridCssClass = data.gridCssClass;
    this.routeBasePath = data.routeBasePath;

    this.backgroundParallaxService.updateBackground({
      src: data.bgSrc,
      filter: data.bgFilter
    });

    this.articlesService
      .getArticles(data.articleType)
      .subscribe(items => {
        if(items && items.length && items[0].document) {
          this.items = items;
          this.filters = this.filtersFromItems(items);
          this.failed = false;
        } else {
          this.failed = true;
        }
      });
  }

  filtersFromItems(items: Array<QueryResponseItem<ArticlesQueryFields>>) {
    const filtersObj = items.reduce((acc, item) => {
      item.document.fields.categories.arrayValue.values.forEach(category => {
        acc[category.stringValue] = true;
      });
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

import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  ArticlesService,
  GetResponseWrapperStatus
} from "../../services/articles.service";
import {
  ThemeColor,
  GetArticlesResponseDocument,
  ArticlesRouteData
} from "../../common/app.constants";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"]
})
export class ArticlesComponent implements OnInit, OnDestroy {
  items: Array<GetArticlesResponseDocument> = [];
  filterCriteria: string = "All";
  gridCssClass: ThemeColor;
  filters = [];
  routeBasePath: string;
  title: string;
  btnCssClass: ThemeColor;
  showError;

  private articlesSubscription: Subscription;

  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data as ArticlesRouteData;
    this.title = data.title;
    this.btnCssClass = data.themeColor;
    this.gridCssClass = data.themeColor;
    this.routeBasePath = data.routeBasePath;

    this.articlesSubscription = this.articlesService
      .getArticles(data.articleType)
      .subscribe(response => {
        if (response.status === GetResponseWrapperStatus.SUCCESS) {
          this.items = response.data;
          this.filters = this.filtersFromItems(response.data);
          this.showError = false;
        } else {
          this.items = [];
          this.filters = this.filtersFromItems([]);
          this.showError = true;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.articlesSubscription) {
      this.articlesSubscription.unsubscribe();
    }
  }

  filtersFromItems(items: Array<GetArticlesResponseDocument>) {
    const filtersObj = items.reduce((acc, item) => {
      item.fields.categories.arrayValue.values.forEach(category => {
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

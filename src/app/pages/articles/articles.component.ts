import { Component, OnInit } from "@angular/core";
import {
  GetResponseWrapperStatus
} from "../../services/articles.service";
import {
  ThemeColor,
  GetArticlesResponseDocument,
  ArticlesRouteData
} from "../../common/app.constants";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"]
})
export class ArticlesComponent implements OnInit {
  items: Array<GetArticlesResponseDocument> = [];
  filterCriteria: string = "All";
  gridCssClass: ThemeColor;
  filters = [];
  routeBasePath: string;
  title: string;
  btnCssClass: ThemeColor;
  showError;


  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data as ArticlesRouteData;
    this.title = data.title;
    this.btnCssClass = data.themeColor;
    this.gridCssClass = data.themeColor;
    this.routeBasePath = data.routeBasePath;

    if (data.articlesResponse.status === GetResponseWrapperStatus.SUCCESS) {
      this.items = data.articlesResponse.data;
      this.filters = this.filtersFromItems(data.articlesResponse.data);
      this.showError = false;
    } else {
      this.items = [];
      this.filters = this.filtersFromItems([]);
      this.showError = true;
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

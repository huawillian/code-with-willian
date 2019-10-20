import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticlesService } from "../../services/articles.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-article-details",
  templateUrl: "./article-details.component.html",
  styleUrls: ["./article-details.component.scss"]
})
export class ArticleDetailsComponent implements OnInit {
  private articleDetailsSubscription: Subscription;
  articleDetails: any;

  routeBackPath: string;
  routeBackText: string;
  title: string;
  thumbnail: string;
  description: string;
  info: string;
  cssClass: string;
  categories: string;
  failed: boolean;
  routeBackTextNotFound: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data;
    this.routeBackPath = data.routeBackPath;
    this.routeBackText = data.routeBackText;
    this.routeBackTextNotFound = data.routeBackTextNotFound;
    this.cssClass = data.themeColor;

    const articleId = this.activatedRoute.snapshot.paramMap.get("id");
    this.articleDetailsSubscription = this.articlesService
      .getArticleDetails(data.articleType, articleId)
      .subscribe(response => {
        if(response.data) {
          this.articleDetails = response.data;
          this.title = response.data.fields.title.stringValue;
          this.thumbnail = response.data.fields.thumbnail.stringValue;
          this.description = response.data.fields.description.stringValue;
          this.info = response.data.fields.info.stringValue;
          this.categories = response.data.fields.categories.arrayValue.values
            .map(value => value.stringValue)
            .join(", ");
          this.failed = false;
        } else {
          this.failed = true;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.articleDetailsSubscription) {
      this.articleDetailsSubscription.unsubscribe();
    }
  }
}

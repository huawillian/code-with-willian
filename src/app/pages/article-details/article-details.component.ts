import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppConstants } from "../../common/app.constants";

interface linkItem {
  iconSrc: string;
  linkType: string;
  url: string;
}

@Component({
  selector: "app-article-details",
  templateUrl: "./article-details.component.html",
  styleUrls: ["./article-details.component.scss"]
})
export class ArticleDetailsComponent implements OnInit {
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
  tldr: string;
  links: linkItem[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data;
    this.routeBackPath = data.routeBackPath;
    this.routeBackText = data.routeBackText;
    this.routeBackTextNotFound = data.routeBackTextNotFound;
    this.cssClass = data.themeColor;

    if (data.articleDetailsResponse.data) {
      this.articleDetails = data.articleDetailsResponse.data;
      this.title = data.articleDetailsResponse.data.fields.title.stringValue;
      this.thumbnail =
        data.articleDetailsResponse.data.fields.thumbnail.stringValue;
      this.description =
        data.articleDetailsResponse.data.fields.description.stringValue;
      this.info = data.articleDetailsResponse.data.fields.info.stringValue;
      this.categories = data.articleDetailsResponse.data.fields.categories.arrayValue.values
        .map(value => value.stringValue)
        .join(", ");
      this.tldr = data.articleDetailsResponse.data.fields.tldr
        ? data.articleDetailsResponse.data.fields.tldr.stringValue
        : "";
      this.links = data.articleDetailsResponse.data.fields.links
        ? data.articleDetailsResponse.data.fields.links.arrayValue.values.map(
            linkResponse => {
              return {
                linkType: linkResponse.mapValue.fields.linkType.stringValue,
                iconSrc:
                  AppConstants.FIRESTORE_LINK_TYPE_ICON_SRC_MAPPING[
                    linkResponse.mapValue.fields.linkType.stringValue
                  ] || AppConstants.FIRESTORE_FALLBACK_ICON_SRC,
                url: linkResponse.mapValue.fields.url.stringValue
              };
            }
          )
        : [];
      this.failed = false;
    } else {
      this.failed = true;
    }
  }
}

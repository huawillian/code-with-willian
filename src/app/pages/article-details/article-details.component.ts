import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppConstants, ArticleType } from "../../common/app.constants";

import "clipboard";

import "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-javascript";

declare var Prism: any;

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
  problem: string;
  example: string;
  solution: string;
  solutionHTML: string;
  explanation: string;
  show: boolean;
  isCode: boolean;

  constructor(private activatedRoute: ActivatedRoute) {}

  showSolution() {
    this.solution = Prism.highlight(
      this.solution,
      Prism.languages.javascript,
      "javascript"
    );

    setTimeout(() => Prism.highlightAll(), 0);

    this.show = true;
  }

  showExample() {
    this.example = Prism.highlight(
      this.example,
      Prism.languages.javascript,
      "javascript"
    );

    setTimeout(() => Prism.highlightAll(), 0);
  }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data;
    this.routeBackPath = data.routeBackPath;
    this.routeBackText = data.routeBackText;
    this.routeBackTextNotFound = data.routeBackTextNotFound;
    this.cssClass = data.themeColor;

    if (data.articleType === ArticleType.CODE) {
      this.isCode = true;
      this.show = false;
    } else {
      this.isCode = false;
      this.show = true;
    }

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
      this.problem = data.articleDetailsResponse.data.fields.problem
        ? data.articleDetailsResponse.data.fields.problem.stringValue
        : "";
      this.example = data.articleDetailsResponse.data.fields.example
        ? data.articleDetailsResponse.data.fields.example.stringValue.replace(
            /\\n/g,
            "\n"
          )
        : "";
      this.solution = data.articleDetailsResponse.data.fields.solution
        ? data.articleDetailsResponse.data.fields.solution.stringValue.replace(
            /\\n/g,
            "\n"
          )
        : "";
      this.explanation = data.articleDetailsResponse.data.fields.explanation
        ? data.articleDetailsResponse.data.fields.explanation.stringValue
        : "";
      this.failed = false;

      this.showExample();
    } else {
      this.failed = true;
    }
  }
}

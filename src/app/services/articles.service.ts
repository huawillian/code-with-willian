import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import {
  ArticleType,
  AppConstants,
  GetArticlesResponseDocument,
  GetArticlesResponse
} from "../common/app.constants";
import { environment } from "../../environments/environment";
import { MockArticles } from "../common/mock.articles";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

export enum GetResponseWrapperStatus {
  SUCCESS,
  FAILURE
}

export interface GetArticlesResponseWrapper {
  status: GetResponseWrapperStatus;
  data: GetArticlesResponseDocument[];
}

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  private articlesCacheKey = {
    [ArticleType.PROJECT]: "projects",
    [ArticleType.BLOG]: "blogs",
    [ArticleType.CODE]: "code"
  };

  constructor(private httpClient: HttpClient) {}

  private prepareArticlesEndpoint(articleType: ArticleType): string {
    const queryParams = AppConstants.FIRESTORE_SNIPPET_FIELDPATHS.map(
      fieldName => {
        return `${AppConstants.FIRESTORE_MASK_QUERY_KEY}=${fieldName}`;
      }
    ).join("&");
    const collectionPath =
      AppConstants.FIRESTORE_ARTICLE_TYPE_MAPPING[articleType];
    return (
      AppConstants.FIRESTORE_BASE_ENDPOINT +
      AppConstants.FIRESTORE_DOCUMENTS_PATH +
      collectionPath +
      "?" +
      queryParams
    );
  }

  private fetchArticles(
    articleType: ArticleType
  ): Observable<GetArticlesResponse> {
    if (environment.production) {
      const endpoint = this.prepareArticlesEndpoint(articleType);
      return this.httpClient.get<GetArticlesResponse>(endpoint);
    } else {
      return of(MockArticles.GET_ARTICLES_RESPONSE);
    }
  }

  private retrieveCachedArticles(
    articleType: ArticleType
  ): GetArticlesResponseDocument[] {
    try {
      return JSON.parse(
        window.sessionStorage.getItem(this.articlesCacheKey[articleType])
      );
    } catch (e) {}
  }

  public getArticles(
    articleType: ArticleType
  ): Observable<GetArticlesResponseWrapper> {
    let articlesFromCache = this.retrieveCachedArticles(articleType);

    // TODO: Invalidate cache based on last updated time
    if (articlesFromCache) {
      return of({
        status: GetResponseWrapperStatus.SUCCESS,
        data: articlesFromCache
      });
    } else {
      return this.fetchArticles(articleType).pipe(
        map(data => {
          window.sessionStorage.setItem(
            this.articlesCacheKey[articleType],
            JSON.stringify(data.documents)
          );
          return {
            status: GetResponseWrapperStatus.SUCCESS,
            data: data.documents
          };
        }),
        catchError(err => {
          console.log("Unable to fetch articles", articleType, err);
          return of({
            status: GetResponseWrapperStatus.FAILURE,
            data: undefined
          });
        })
      );
    }
  }
}

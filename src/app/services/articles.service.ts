import { Injectable } from "@angular/core";
import { of, Observable, BehaviorSubject } from "rxjs";
import {
  ArticleType,
  AppConstants,
  QueryResponseItem,
  ArticlesQueryFields
} from "../common/app.constants";
import { environment } from "../../environments/environment";
import { MockArticles } from "../common/mock.articles";
import { HttpClient } from "@angular/common/http";
import { filter, mergeMap } from "rxjs/operators";

interface ArticlesCache {
  project: Array<QueryResponseItem<ArticlesQueryFields>>;
  code: Array<QueryResponseItem<ArticlesQueryFields>>;
  blog: Array<QueryResponseItem<ArticlesQueryFields>>;
}

interface ArticlesLock {
  project: boolean;
  code: boolean;
  blog: boolean;
}

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  private $articles = new BehaviorSubject<ArticlesCache>(undefined);
  private articlesCache: ArticlesCache = {
    project: [],
    code: [],
    blog: []
  };
  private articlesLock: ArticlesLock = {
    project: false,
    code: false,
    blog: false
  };
  private articlesCacheKey = "articlesCache";

  constructor(private httpClient: HttpClient) {}

  private isValidArticles(
    articlesCache: ArticlesCache,
    articleType: ArticleType,
    skipDocumentCheck = true
  ) {
    return (
      articlesCache &&
      articlesCache[articleType] &&
      articlesCache[articleType].length &&
      (skipDocumentCheck || articlesCache[articleType][0].document)
    );
  }

  private fetchArticles(
    articleType: ArticleType
  ): Observable<Array<QueryResponseItem<ArticlesQueryFields>>> {
    if (!environment.production) {
      const body = {
        structuredQuery: {
          where: {
            fieldFilter: {
              field: {
                fieldPath: "type"
              },
              op: "EQUAL",
              value: {
                stringValue: articleType
              }
            }
          },
          from: [
            {
              collectionId: "articles"
            }
          ]
        }
      };

      return this.httpClient.post<
        Array<QueryResponseItem<ArticlesQueryFields>>
      >(AppConstants.FIRESTORE_QUERY_ENDPOINT, body);
    } else {
      return of(MockArticles.QUERY_RESPONSE);
    }
  }

  public getArticles(
    articleType: ArticleType
  ): Observable<Array<QueryResponseItem<ArticlesQueryFields>>> {
    return this.$articles.pipe(
      mergeMap(items => {
        // When cache is updated, return articles of the same type
        if (this.isValidArticles(items, articleType, true)) {
          return of(items[articleType]);
        } else {
          // If invalid articles, update cache from session storage and network fallback
          // Lock articles if update logic is in progress of the same type
          // Release lock when update logic is complete
          if (!this.articlesLock[articleType]) {
            this.articlesLock[articleType] = true;
            let sessionStorageArticlesCache = window.sessionStorage.getItem(
              this.articlesCacheKey
            );
            let cacheObj: ArticlesCache;

            if (sessionStorageArticlesCache) {
              cacheObj = JSON.parse(sessionStorageArticlesCache);
            }

            if (this.isValidArticles(cacheObj, articleType, true)) {
              this.articlesCache = cacheObj;
              this.$articles.next(this.articlesCache);
              this.articlesLock[articleType] = false;
            } else {
              this.fetchArticles(articleType).subscribe(data => {
                this.articlesCache[articleType] = data;
                window.sessionStorage.setItem(
                  this.articlesCacheKey,
                  JSON.stringify(this.articlesCache)
                );
                this.$articles.next(this.articlesCache);
                this.articlesLock[articleType] = false;
              });
            }
          }
          return of(undefined);
        }
      }),
      filter(items => !!items)
    );
  }
}

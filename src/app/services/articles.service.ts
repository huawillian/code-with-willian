import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { ArticleType, AppConstants, QueryResponseItem, ArticlesQueryFields } from "../common/app.constants";
import { environment } from "../../environments/environment";
import { MockArticles } from "../common/mock.articles";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticles(articleType: ArticleType): Observable<Array<QueryResponseItem<ArticlesQueryFields>>> {
    if (environment.production) {
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

      return this.httpClient.post<Array<QueryResponseItem<ArticlesQueryFields>>>(AppConstants.FIRESTORE_QUERY_ENDPOINT, body);
    } else {
      // return of(MockArticles.ARTICLE_FAILED_RESPONSE);
      return of(MockArticles.QUERY_RESPONSE);
    }
  }
}

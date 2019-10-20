import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { tap } from "rxjs/operators";
import {
  LoaderService,
  LoaderAction
} from "../components/loader/services/loader.service";
import { ArticlesService } from "./articles.service";

@Injectable({
  providedIn: "root"
})
export class ArticleDetailsResolverService implements Resolve<any> {
  constructor(
    private loaderService: LoaderService,
    private articlesService: ArticlesService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.loaderService.updateLoader(LoaderAction.Show);
    return this.articlesService.getArticleDetails(route.data.articleType, route.paramMap.get("id")).pipe(
      tap(() => {
        this.loaderService.updateLoader(LoaderAction.Hide);
      })
    );
  }
}

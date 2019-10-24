import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailsComponent } from "./article-details.component";
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
  {
    path: "",
    component: ArticleDetailsComponent
  }
];

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [ArticleDetailsComponent],
  exports: [RouterModule]
})
export class ArticleDetailsModule {}

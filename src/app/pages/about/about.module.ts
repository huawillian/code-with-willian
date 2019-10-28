import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";
import { ComponentsModule } from "../../components/components.module";
import { DirectivesModule } from '../../directives/directives.module';

const routes: Routes = [
  {
    path: "",
    component: AboutComponent
  }
];

@NgModule({
  imports: [CommonModule, ComponentsModule, DirectivesModule, RouterModule.forChild(routes)],
  declarations: [AboutComponent],
  exports: [RouterModule]
})
export class AboutModule {}

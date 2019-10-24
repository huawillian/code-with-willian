import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  exports: [RouterModule]
})
export class HomeModule {}

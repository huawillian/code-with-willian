import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
  {
    path: "",
    component: ContactComponent
  }
];

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [ContactComponent],
  exports: [RouterModule]
})
export class ContactModule {}

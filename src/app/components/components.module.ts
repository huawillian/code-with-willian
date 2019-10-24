import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeBannerComponent } from './resume-banner/resume-banner.component';
import { LoaderComponent } from './loader/loader.component';
import { BackgroundParallaxComponent } from './background-parallax/background-parallax.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { GridComponent } from './grid/grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ResumeBannerComponent,
    LoaderComponent,
    BackgroundParallaxComponent,
    HeroBannerComponent,
    GridComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ResumeBannerComponent,
    LoaderComponent,
    BackgroundParallaxComponent,
    HeroBannerComponent,
    GridComponent
  ]
})
export class ComponentsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { CodeDetailComponent } from './pages/code-detail/code-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeBannerComponent } from './components/resume-banner/resume-banner.component';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { BackgroundParallaxComponent } from './components/background-parallax/background-parallax.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { GroupArrayPipe } from './pipes/group-array.pipe';
import { GridComponent } from './components/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './pages/articles/articles.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectDetailComponent,
    BlogDetailComponent,
    CodeDetailComponent,
    NotFoundComponent,
    FooterComponent,
    ResumeBannerComponent,
    LazyLoadDirective,
    LoaderComponent,
    BackgroundParallaxComponent,
    HeroBannerComponent,
    GroupArrayPipe,
    GridComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

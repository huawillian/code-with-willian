import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CodeComponent } from './pages/code/code.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CodeComponent,
    ProjectsComponent,
    BlogsComponent,
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
    HeroBannerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

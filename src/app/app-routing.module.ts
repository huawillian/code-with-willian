import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CodeDetailComponent } from './pages/code-detail/code-detail.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DefaultResolverService } from './services/default-resolver.service';
import { ThemeColor, ArticleType } from './common/app.constants';
import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'code',
    component: ArticlesComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      title: 'Coding Toy Problems',
      btnCssClass: ThemeColor.GREEN,
      gridCssClass: ThemeColor.GREEN,
      routeBasePath: '/code/',
      bgSrc: '/assets/blog-bg.jpg',
      bgFilter: 'rgba(30, 30, 30, 0.8)',
      articleType: ArticleType.CODE
    }
  },
  {
    path: 'projects',
    component: ArticlesComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      title: 'Projects',
      btnCssClass: ThemeColor.ORANGE,
      gridCssClass: ThemeColor.ORANGE,
      routeBasePath: '/projects/',
      bgSrc: '/assets/blog-bg.jpg',
      bgFilter: 'rgba(30, 30, 30, 0.8)',
      articleType: ArticleType.PROJECT
    }
  },
  {
    path: 'blog',
    component: ArticlesComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      title: 'Blog',
      btnCssClass: ThemeColor.CYAN,
      gridCssClass: ThemeColor.CYAN,
      routeBasePath: '/blog/',
      bgSrc: '/assets/blog-bg.jpg',
      bgFilter: 'rgba(30, 30, 30, 0.8)',
      articleType: ArticleType.BLOG
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'code/:id',
    component: CodeDetailComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CodeComponent } from './pages/code/code.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CodeDetailComponent } from './pages/code-detail/code-detail.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DefaultResolverService } from './services/default-resolver.service';

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
    component: CodeComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    resolve: {
      data: DefaultResolverService
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
    path: 'problem/:id',
    component: CodeDetailComponent,
    resolve: {
      data: DefaultResolverService
    }
  },
  {
    path: 'project/:id',
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

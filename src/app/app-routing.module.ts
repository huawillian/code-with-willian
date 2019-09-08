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


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'code',
    component: CodeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'blog',
    component: BlogsComponent
  }, 
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'code/:id',
    component: CodeDetailComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  {
    path: '*',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

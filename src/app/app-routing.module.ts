import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { DefaultResolverService } from "./services/default-resolver.service";
import { ThemeColor, ArticleType } from "./common/app.constants";
import { ArticlesComponent } from "./pages/articles/articles.component";
import { ArticleDetailsComponent } from "./pages/article-details/article-details.component";
import { ArticlesResolverService } from "./services/articles-resolver.service";
import { ArticleDetailsResolverService } from "./services/article-details-resolver.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      bgSrc: "/assets/dev-bg.jpg",
      bgFilter: "rgba(0, 0, 0, 0.7)"
    }
  },
  {
    path: "about",
    component: AboutComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      bgSrc: "/assets/contact-bg.jpg",
      bgFilter: "rgba(0, 0, 0, 0.7)"
    }
  },
  {
    path: "coding-toy-problems",
    component: ArticlesComponent,
    resolve: {
      articlesResponse: ArticlesResolverService
    },
    data: {
      bgSrc: "/assets/blog-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)",
      title: "Coding Toy Problems",
      themeColor: ThemeColor.GREEN,
      routeBasePath: "/coding-toy-problems/",
      articleType: ArticleType.CODE
    }
  },
  {
    path: "projects",
    component: ArticlesComponent,
    resolve: {
      articlesResponse: ArticlesResolverService
    },
    data: {
      bgSrc: "/assets/blog-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)",
      title: "Projects",
      themeColor: ThemeColor.ORANGE,
      routeBasePath: "/projects/",
      articleType: ArticleType.PROJECT
    }
  },
  {
    path: "blogs",
    component: ArticlesComponent,
    resolve: {
      articlesResponse: ArticlesResolverService
    },
    data: {
      bgSrc: "/assets/blog-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)",
      title: "Blogs",
      themeColor: ThemeColor.CYAN,
      routeBasePath: "/blogs/",
      articleType: ArticleType.BLOG
    }
  },
  {
    path: "coding-toy-problems/:id",
    component: ArticleDetailsComponent,
    resolve: {
      articleDetailsResponse: ArticleDetailsResolverService
    },
    data: {
      themeColor: ThemeColor.GREEN,
      articleType: ArticleType.CODE,
      transparentNavbar: false,
      routeBackPath: "/coding-toy-problems",
      routeBackText: "Coding Toy Problems",
      routeBackTextNotFound: "coding toy problems"
    }
  },
  {
    path: "projects/:id",
    component: ArticleDetailsComponent,
    resolve: {
      articleDetailsResponse: ArticleDetailsResolverService
    },
    data: {
      themeColor: ThemeColor.ORANGE,
      articleType: ArticleType.PROJECT,
      transparentNavbar: false,
      routeBackPath: "/projects",
      routeBackText: "Projects",
      routeBackTextNotFound: "projects"
    }
  },
  {
    path: "blogs/:id",
    component: ArticleDetailsComponent,
    resolve: {
      articleDetailsResponse: ArticleDetailsResolverService
    },
    data: {
      themeColor: ThemeColor.CYAN,
      articleType: ArticleType.BLOG,
      transparentNavbar: false,
      routeBackPath: "/blogs",
      routeBackText: "Blogs",
      routeBackTextNotFound: "blogs"
    }
  },
  {
    path: "contact",
    component: ContactComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      bgSrc: "/assets/contact-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)"
    }
  },
  {
    path: "**",
    component: NotFoundComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      bgSrc: "/assets/contact-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)",
      transparentNavbar: false
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

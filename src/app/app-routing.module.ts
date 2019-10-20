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
    path: "code",
    component: ArticlesComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      bgSrc: "/assets/blog-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)",
      title: "Coding Toy Problems",
      themeColor: ThemeColor.GREEN,
      routeBasePath: "/code/",
      articleType: ArticleType.CODE
    }
  },
  {
    path: "projects",
    component: ArticlesComponent,
    resolve: {
      data: DefaultResolverService
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
    path: "blog",
    component: ArticlesComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      bgSrc: "/assets/blog-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)",
      title: "Blog",
      themeColor: ThemeColor.CYAN,
      routeBasePath: "/blog/",
      articleType: ArticleType.BLOG
    }
  },
  {
    path: "code/:id",
    component: ArticleDetailsComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      themeColor: ThemeColor.GREEN,
      articleType: ArticleType.CODE,
      transparentNavbar: false,
      routeBackPath: "/code",
      routeBackText: "Code"
    }
  },
  {
    path: "projects/:id",
    component: ArticleDetailsComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      themeColor: ThemeColor.ORANGE,
      articleType: ArticleType.PROJECT,
      transparentNavbar: false,
      routeBackPath: "/projects",
      routeBackText: "Projects"
    }
  },
  {
    path: "blog/:id",
    component: ArticleDetailsComponent,
    resolve: {
      data: DefaultResolverService
    },
    data: {
      themeColor: ThemeColor.CYAN,
      articleType: ArticleType.BLOG,
      transparentNavbar: false,
      routeBackPath: "/blog",
      routeBackText: "Blog"
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
    data: {
      bgSrc: "/assets/contact-bg.jpg",
      bgFilter: "rgba(30, 30, 30, 0.8)"
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

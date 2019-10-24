import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultResolverService } from "./services/default-resolver.service";
import { ThemeColor, ArticleType } from "./common/app.constants";
import { ArticlesResolverService } from "./services/articles-resolver.service";
import { ArticleDetailsResolverService } from "./services/article-details-resolver.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then(mod => mod.HomeModule),
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
    loadChildren: () =>
      import("./pages/about/about.module").then(mod => mod.AboutModule),
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
    loadChildren: () =>
      import("./pages/articles/articles.module").then(
        mod => mod.ArticlesModule
      ),
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
    loadChildren: () =>
      import("./pages/articles/articles.module").then(
        mod => mod.ArticlesModule
      ),
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
    loadChildren: () =>
      import("./pages/articles/articles.module").then(
        mod => mod.ArticlesModule
      ),
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
    loadChildren: () =>
      import("./pages/article-details/article-details.module").then(
        mod => mod.ArticleDetailsModule
      ),
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
    loadChildren: () =>
      import("./pages/article-details/article-details.module").then(
        mod => mod.ArticleDetailsModule
      ),
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
    loadChildren: () =>
      import("./pages/article-details/article-details.module").then(
        mod => mod.ArticleDetailsModule
      ),
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
    loadChildren: () =>
      import("./pages/contact/contact.module").then(mod => mod.ContactModule),
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
    loadChildren: () =>
      import("./pages/not-found/not-found.module").then(
        mod => mod.NotFoundModule
      ),
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

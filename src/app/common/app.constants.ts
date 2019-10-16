export enum ThemeColor {
  ORANGE = "orange",
  CYAN = "cyan",
  GREEN = "green"
}

export enum ArticleType {
  BLOG = "blog",
  CODE = "code",
  PROJECT = "project"
}

export interface ArticlesRouteData {
  title: string;
  btnCssClass: ThemeColor;
  gridCssClass: ThemeColor;
  routeBasePath: string;
  bgSrc: string;
  bgFilter: string;
  articleType: ArticleType;
}

export interface QueryResponseItem<T> {
  readTime: string;
  document?: {
    name: string;
    fields?: T;
    createTime: string;
    updateTime: string;
  };
}

export interface ArticlesQueryFields {
  info: {
    stringValue: string;
  };
  type: {
    stringValue: string;
  };
  categories: {
    arrayValue: {
      values: Array<{
        stringValue: string;
      }>;
    };
  };
  title: {
    stringValue: string;
  };
  thumbnail: {
    stringValue: string;
  };
  description: {
    stringValue: string;
  };
  route: {
    stringValue: string;
  };
}

export interface ArticleDetailsQueryFields {
  body: {
    stringValue: string;
  };
  type: {
    stringValue: string;
  };
  route: {
    stringValue: string;
  };
}

export class AppConstants {
  static FIRESTORE_BASE_ENDPOINT = "https://firestore.googleapis.com/v1/";
  static FIRESTORE_QUERY_ENDPOINT =
    "https://firestore.googleapis.com/v1/projects/code-with-willian/databases/(default)/documents:runQuery";
}

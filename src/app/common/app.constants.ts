import { GetArticlesResponseWrapper } from '../services/articles.service';

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
  themeColor: ThemeColor;
  routeBasePath: string;
  bgSrc: string;
  bgFilter: string;
  articleType: ArticleType;
  articlesResponse: GetArticlesResponseWrapper;
}

export interface ArticleDetailsRouteData {
  themeColor: ThemeColor;
  articleType: ArticleType;
}

export interface GetArticlesResponse {
  documents: GetArticlesResponseDocument[];
}

export interface GetArticlesResponseDocument {
  name: string;
  fields: {
    body?: {
      stringValue: string;
    };
    info?: {
      stringValue: string;
    };
    categories?: {
      arrayValue?: {
        values: Array<{
          stringValue: string;
        }>;
      };
    };
    title?: {
      stringValue: string;
    };
    thumbnail?: {
      stringValue: string;
    };
    description?: {
      stringValue: string;
    };
  };
  createTime: string;
  updateTime: string;
}

export class AppConstants {
  static FIRESTORE_BASE_ENDPOINT = "https://firestore.googleapis.com";

  static FIRESTORE_DOCUMENTS_PATH =
    "/v1/projects/code-with-willian/databases/(default)/documents";

  static FIRESTORE_SNIPPET_FIELDPATHS = [
    "info",
    "categories",
    "title",
    "thumbnail",
    "description"
  ];

  static FIRESTORE_MASK_QUERY_KEY = "mask.fieldPaths";

  static FIRESTORE_ARTICLE_TYPE_MAPPING = {
    [ArticleType.BLOG]: "/blogs",
    [ArticleType.CODE]: "/code",
    [ArticleType.PROJECT]: "/projects"
  };
}

export interface IAttribute {
  title: String;
  slug: String;
}

export interface ICategories {
  id: Number;
  attributes: IAttribute;
}

export interface IPagination {
  page: Number;
  pageSize: Number;
  pageCount: Number;
  total: Number;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IImageData {
  data: {
    attributes: {
      url: String;
      formats: {
        small: {
          url: String;
        };
      };
    };
  };
}

export interface IAuthor {
  data: {
    attributes: {
      username: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IArticleAttributes {
  title: String;
  body: String;
  slug: String;
  thumbnail: IImageData;
  createdAt: string;
  author: IAuthor;
}

export interface IArticle {
  id: Number;
  attributes: IArticleAttributes;
}

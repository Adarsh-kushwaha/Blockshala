import React from "react";
import { IArticle } from "../types";

export interface IPropType {
  articles: IArticle[];
}

const Article = ({ articles }: IPropType) => {
  return <div>Article</div>;
};

export default Article;

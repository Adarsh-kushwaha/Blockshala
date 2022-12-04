import React from "react";
import { IArticle } from "../types";
import BlogCard from "./BlogCard";
import Link from "next/link";

export interface IPropType {
  articles: IArticle[];
}

const Article = ({ articles }: IPropType) => {
  return (
    <div className="grid grid-cols-2 gap-6 justify-center">
      {articles.map((article) => {
        return (
          <Link href="#">
            <BlogCard article={article} key={article.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default Article;

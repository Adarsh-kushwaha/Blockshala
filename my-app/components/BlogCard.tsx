import Image from "next/image";
import React from "react";
import { IArticle } from "../types";
import { formatDate } from "../utils";

interface IPropType {
  article: IArticle;
}

const BlogCard = ({ article }: IPropType) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">{article.attributes.title}</h2>
      <div className="flex items-center gap-2 text-gray-400 text-sm font-thin">
        <Image
          src="http://localhost:1337/uploads/thumbnail_adarsh_1_cc787e7372.jpg"
          width={30}
          height={30}
          alt="author"
          className="rounded-full"
        />
        <p>{article.attributes.author.data.attributes.username}</p>
        <p>{formatDate(article.attributes.createdAt)}</p>
      </div>
      <p className="text-gray-600 ">
        {article.attributes.body.substring(0, 150)}...
      </p>
    </div>
  );
};

export default BlogCard;

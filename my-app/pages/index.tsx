import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { fetchCategories, fetchArticles } from "../html";
import { AxiosResponse } from "axios";
import { ICategories, ICollectionResponse, IArticle } from "../types";
import Tabs from "../components/Tabs";
import Article from "../components/Article";

interface IPropTypes {
  categories: {
    items: ICategories[];
  };

  articles: {
    items: IArticle[];
  };
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  console.log(articles);
  return (
    <div>
      <Tabs categories={categories.items} />
      <Article articles={articles.items} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  //articles
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles();
  console.log(articles);

  //categories
  const {
    data: categories,
  }: AxiosResponse<ICollectionResponse<ICategories[]>> =
    await fetchCategories();
  //console.log(categories);

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
      },
    },
  };
};

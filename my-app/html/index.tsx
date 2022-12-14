import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRPI_API_TOKEN}`,
  },
});

// export const getCatData = async () =>
//   await fetch(`http://localhost:1337/api/categories`, {
//     headers: {
//       Authorization: `Bearer ${process.env.STRPI_API_TOKEN}`,
//     },
//   });


export const fetchCategories = async () => api.get("/api/categories");

export const fetchArticles = async (queryString: String) =>
  api.get(`/api/articles?${queryString}`);

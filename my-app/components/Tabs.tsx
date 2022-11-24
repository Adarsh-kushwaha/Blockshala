import React from "react";
import { ICategories } from "../types";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";

interface IPropType {
  categories: ICategories[];
}

const Tabs = ({ categories }: IPropType) => {
  const router = useRouter();

  const isActiveLink = (category: ICategories) => {
    return category.attributes.slug === router.query.category;
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="my-6 border-b-2 border-solid border-gray-100 flex justify-between items-center">
      <ul className="flex items-center gap-4">
        <li
          className={`border-b-4 pb-3 border-solid  + ${
            router.pathname === "/"
              ? "border-[#FF4F00] text-[#FF4F00]"
              : "border-white text-black"
          }`}
        >
          <Link href="#">Recent</Link>
        </li>
        {categories.map((category) => {
          return (
            <li
              key={Math.random()}
              className={`capitalize border-b-4 pb-3 border-solid border-[#FF4F00] + ${
                isActiveLink(category)
                  ? "border-[#FF4F00] text-[#FF4F00]"
                  : "border-white text-black"
              }}`}
            >
              <Link href={`/category/${category.attributes.slug}`}>
                {category.attributes.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center">
        <BsSearch />
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Articles"
          className="outline-none px-2 py-1 ml-1"
        />
      </div>
    </div>
  );
};

export default Tabs;

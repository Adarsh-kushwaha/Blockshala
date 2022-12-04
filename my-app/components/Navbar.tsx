import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";
import tw from "twin.macro";

const Navbar = () => {
  const Nav = tw.nav`flex flex-row items-center justify-between py-4`;

  return (
    <Nav>
      <Link href="/">
        <Image src={logo} alt="logo" width={200} />
      </Link>
      <ul className="flex items-center gap-4 text-md font-bold text-gray-700 ">
        <li className="hover:text-black">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-black">
          <Link href="/">Roadmaps</Link>
        </li>
        <li className="hover:text-black">
          <Link href="/">Courses</Link>
        </li>
        <li className="hover:text-black">
          <Link href="/">Blog</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4 justify-center">
        <button className=" px-4 py-[7px] text-black font-semibold rounded-lg ">
          Login
        </button>
        <button className="bg-[#FF4F00] px-4 py-[7px] text-white font-semibold rounded-lg shadow">
          Signup
        </button>
      </div>
    </Nav>
  );
};

export default Navbar;

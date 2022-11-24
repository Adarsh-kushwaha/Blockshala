import React from "react";
import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <footer className="flex items-center justify-between w-[85%] mx-auto py-4">
        <div className="flex items-center justify-center gap-2">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} />
          </Link>
          <div className="w-[2px] h-[30px] bg-gray-400"></div>
          <div>© copyright Blockshala 2022</div>
        </div>
        <div className="flex gap-4">
          <BsFacebook size={21} />
          <BsTwitter size={21} />
          <BsInstagram size={21} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

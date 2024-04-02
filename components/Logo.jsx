import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../public/name_logo.jpg";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px] rounded-3xl"
        src={LogoImage}
        alt="Lws"
        width={50}
        height={50}
      />
    </Link>
  );
};

export default Logo;

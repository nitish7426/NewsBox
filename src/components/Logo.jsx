import React from "react";
import { SlSocialDropbox } from "react-icons/sl";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="text-2xl font-bold" to="/">
      News
      <span className="text-orange-500">Box</span>
      <SlSocialDropbox className="inline text-orange-500 text-2xl ml-1" />
    </Link>
  );
};

export default Logo;

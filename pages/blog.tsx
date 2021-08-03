import { NextPage } from "next";
import React from "react";

import Seo from "../components/Seo";

const Blog: NextPage = () => {
  return (
    <>
      <Seo title="Blog" description="" />
      {/* @TODO Blog article cards fetched from STRAPI */}
    </>
  );
};

export default Blog;

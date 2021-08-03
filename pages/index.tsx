import { NextPage } from "next";
import React from "react";

import Seo from "../components/Seo";
import { Button } from "../components/styled/Button.styled";
import { Heading } from "../components/styled/Heading.styled";
import { Subtitle } from "../components/styled/Subtitle.styled";

const Index: NextPage = () => {
  return (
    <>
      <Seo description="" />
      <Heading>
        Bonjour, <br />
        Je suis développeur web Full-stack
      </Heading>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        consequatur error velit enim? Alias laudantium accusamus sequi placeat,
        explicabo sapiente distinctio, corporis et ab fuga hic, impedit illum
        numquam repellendus.
      </Subtitle>

      <Button
        style={{ marginTop: "1rem" }}
        isPrimary
        isOutline
        onClick={() => console.log("TODO")}
      >
        Me contacter
      </Button>
    </>
  );
};

export default Index;

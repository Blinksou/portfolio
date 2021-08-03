import React from "react";

import { Button } from "./styled/Button.styled";
import {
  NavContainer,
  NavLink,
  NavLinkLabel,
  NavMenuToggler,
  NavTitle,
} from "./styled/Nav.styled";

const Navbar: React.FC = () => {
  const APP_TITLE = process.env.NEXT_PUBLIC_APP_TITLE;

  const toggleMenu = () => {
    console.log("@TODO toggle menu");
  };

  return (
    <NavContainer as="header">
      <NavTitle href="/">{APP_TITLE}</NavTitle>
      <nav>
        <NavMenuToggler onClick={toggleMenu} />
        <NavLink href="/">
          <NavLinkLabel>01.</NavLinkLabel>
          Accueil
        </NavLink>
        <NavLink spaceAround href="/blog">
          <NavLinkLabel>02.</NavLinkLabel>
          Blog
        </NavLink>
        <NavLink href="/missions">
          <NavLinkLabel>03.</NavLinkLabel>
          Expériences
        </NavLink>

        <Button
          style={{ marginLeft: "1.6rem" }}
          buttonSize="sm"
          isPrimary
          isOutline
        >
          CV
        </Button>
      </nav>
    </NavContainer>
  );
};

export default Navbar;

import { Menu } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

import { devices } from "../../theme";
import Link from "../Link";
import { Container } from "./Container.styled";
import { LinkProps, StyledLink } from "./Link.styled";

export const NavContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const NavTitle = styled(Link)`
  font-weight: bold;
  font-size: 22px;
  max-width: 2rem;
  user-select: none;
`;

export const NavLink = styled(StyledLink)<LinkProps>`
  display: none;

  @media ${devices.tablet} {
    display: inline-block;
  }
`;

export const NavLinkLabel = styled.span`
  color: ${(p) => p.theme.colors.primary.main};
  margin-right: 0.5rem;
`;

export const NavMenuToggler = styled(Menu)`
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: 0.3s linear;

  &:hover {
    color: ${(p) => p.theme.colors.primary.main};
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

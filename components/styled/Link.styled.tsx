import styled from "styled-components";

import Link from "../Link";

export type LinkProps = {
  spaceAround?: boolean;
};

export const StyledLink = styled(Link)<LinkProps>`
  margin: ${(p) => (p.spaceAround ? "0 1.5rem" : "0")};
  user-select: none;
  transition: 0.3s linear;

  &:hover {
    color: ${(p) => p.theme.colors.primary.main};
  }
`;

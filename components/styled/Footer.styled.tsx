import { Heart as BaseHearth } from "@styled-icons/boxicons-solid";
import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
`;

export const Heart = styled(BaseHearth)`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: 0.3s linear;
  color: ${(p) => p.theme.colors.primary.main};

  &:hover {
    color: ${(p) => p.theme.colors.secondary.main};
  }
`;

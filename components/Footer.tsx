import { Footer as StyledFooter, Heart } from "./styled/Footer.styled";
import { StyledLink } from "./styled/Link.styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        Créé avec <Heart />
      </div>
      <div>
        <StyledLink href="#">Mentions légales</StyledLink>
      </div>
    </StyledFooter>
  );
};

export default Footer;

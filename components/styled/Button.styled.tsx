import styled from "styled-components";

type ButtonProps = {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isOutline?: boolean;
  isProcessing?: boolean;
  isDisabled?: boolean;
  style?: Object;
  onClick?: () => void;
  buttonSize?: "sm" | "md" | "lg";
};

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ buttonSize, theme }) => {
    if (buttonSize === "sm") return theme.buttonSizes.sm;
    if (buttonSize === "md") return theme.buttonSizes.md;
    if (buttonSize === "lg") return theme.buttonSizes.lg;
    return theme.buttonSizes.md;
  }};
  border-radius: 0.375rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  transition: 0.3s linear;

  &:hover {
    transform: scale(1.1);
  }

  ${({ isPrimary, isOutline, theme }) =>
    isPrimary &&
    `
    color: ${
      isOutline ? theme.colors.primary.main : theme.colors.primary.contrastText
    };

    background: ${isOutline ? "transparent" : theme.colors.primary.main};

    border: 2px solid ${theme.colors.primary.main};
  `}
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {!props.isProcessing ? children : "Envoi en cours..."}
    </StyledButton>
  );
};

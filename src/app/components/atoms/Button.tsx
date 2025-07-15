import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { ArrowRight } from "lucide-react";
import { MotionProps, motion } from "framer-motion";

// Extend ButtonProps with MotionProps
interface ButtonProps extends MotionProps {
  variant?: "default" | "link";
  showArrow?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

// Create a motion-enabled styled component
const StyledButton = styled(motion.button)<ButtonProps>`
  cursor: pointer;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  ${({ variant, theme }) =>
    variant === "default" &&
    css`
      background-color: ${theme.colors.button};
      color: ${theme.colors.tertiary};
      padding: 0.8rem 2rem;
      border: none;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
      }

      &:active {
        transform: scale(0.98);
        box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
      }
    `}

  ${({ variant, theme }) =>
    variant === "link" &&
    css`
      background: rgba(99, 102, 241, 0.1);
      color: ${theme.colors.tertiary};
      padding: 0.5rem 1rem;
      border: none;
      text-decoration: none;

      &:hover {
        background: rgba(99, 102, 241, 0.2);
        transform: translateY(-2px);
      }
    `}

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Button = ({
  children,
  variant = "default",
  showArrow = false,
  as = "button",
  href,
  target,
  rel,
  className,
  ...motionProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      as={as}
      href={href}
      target={target}
      rel={rel}
      variant={variant}
      className={className}
      {...motionProps}
    >
      {children}
      {showArrow && <ArrowRight />}
    </StyledButton>
  );
};

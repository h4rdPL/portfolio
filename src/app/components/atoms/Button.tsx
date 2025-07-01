import { PropsWithChildren } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  padding: 0.8rem 2rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
  }
`;

export const Button = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <StyledButton className={className}>{children}</StyledButton>
);

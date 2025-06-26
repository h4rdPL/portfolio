import { PropsWithChildren } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand};
  padding: 0.5rem 2rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export const Button = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <StyledButton className={className}>{children}</StyledButton>
);

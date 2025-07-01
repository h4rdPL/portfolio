import styled, { css } from "styled-components";

type TagVariant = "tech" | "project-status" | "stack";

interface TagProps {
  variant?: TagVariant;
  type?: string;
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  variant = "tech",
  type,
  children,
  className,
}) => {
  return (
    <StyledTag variant={variant} type={type} className={className}>
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.span<{ variant: TagVariant; type?: string }>`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-transform: lowercase;
  padding: ${({ variant, theme }) =>
    variant === "tech"
      ? "0.35rem 0.9rem"
      : variant === "stack"
      ? "0.4rem 0.8rem"
      : "0.2rem 0.8rem"};

  ${({ variant, theme }) =>
    variant === "tech" &&
    css`
      background-color: rgba(99, 102, 241, 0.1);
      color: ${theme.colors.tertiary};
      border: 1px solid rgba(99, 102, 241, 0.2);
      transition: all 0.2s ease;

      &:hover {
        background-color: ${theme.colors.tertiary};
        color: ${theme.colors.textInverted};
        transform: translateY(-2px);
      }
    `}

  ${({ variant, theme }) =>
    variant === "stack" &&
    css`
      background: ${theme.colors.gray100};
      color: ${theme.colors.gray800};
    `}

  ${({ variant, type, theme }) =>
    variant === "project-status" &&
    css`
      ${type === "done" &&
      css`
        background: ${theme.colors.success};
        color: #166534;
      `}
      ${type === "in progress" &&
      css`
        background: ${theme.colors.info};
        color: #1e3a8a;
      `}
      ${type === "refactoring" &&
      css`
        background: ${theme.colors.warning};
        color: #92400e;
      `}
      ${!["done", "in progress", "refactoring"].includes(type || "") &&
      css`
        background: #e9d5ff;
        color: #6b21a8;
      `}
    `}
`;

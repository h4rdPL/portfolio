import React from "react";
import styled, { css, keyframes } from "styled-components";

type TagVariant = "tech" | "project-status" | "stack" | "duration";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  type?: string;
  index?: number;
  className?: string;
  children: React.ReactNode;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
`;

export const Tag: React.FC<TagProps> = ({
  variant = "tech",
  type,
  index,
  children,
  className,
  ...rest
}) => {
  return (
    <StyledTag
      variant={variant}
      type={type}
      index={index}
      className={className}
      {...rest}
    >
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.span<{
  variant: TagVariant;
  type?: string;
  index?: number;
}>`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ variant }) =>
    variant === "tech"
      ? "0.35rem 0.9rem"
      : variant === "stack"
      ? "0.4rem 0.8rem"
      : variant === "project-status"
      ? "0.2rem 0.8rem"
      : variant === "duration"
      ? "0.4rem 1rem"
      : "0"};
  cursor: ${({ variant }) => (variant === "duration" ? "default" : "pointer")};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  ${({ index }) =>
    index !== undefined &&
    css`
      opacity: 0;
      animation: ${fadeInUp} 0.6s ease-out forwards;
      animation-delay: ${index * 0.1}s;
    `}

  ${({ variant }) =>
    (variant === "tech" || variant === "stack") &&
    css`
      text-transform: lowercase;
    `}

  ${({ variant, theme }) =>
    variant === "tech" &&
    css`
      background-color: rgba(99, 102, 241, 0.1);
      color: ${theme.colors.tertiary};
      border: 1px solid rgba(99, 102, 241, 0.2);

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

  ${({ variant, index }) =>
    variant === "duration" &&
    css`
      background: rgba(0, 122, 204, 0.1);
      color: ${({ theme }) => theme.colors.black || "#000"};
      border: 1px solid rgba(0, 122, 204, 0.2);
      animation: ${fadeInUp} 0.6s ease-out forwards,
        ${float} 3s ease-in-out infinite;
      animation-delay: ${index
        ? `${index * 0.1}s, ${index * 0.1 + 0.6}s`
        : "0s, 0.6s"};
    `}
`;

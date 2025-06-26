"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: relative;
  z-index: 10;

  img {
    height: 40px;
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  padding: ${({ $isOpen }) => ($isOpen ? "1rem" : "0 1rem")};
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"};

  li a {
    position: relative;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    display: inline-block;
    transition: color 0.3s ease, transform 0.3s ease;

    &:before {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.brand};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: #0070f3;
      transform: translateY(-3px);

      &:before {
        transform: scaleX(1);
      }
    }
  }

  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    display: flex !important;
    max-height: none;
    opacity: 1;
    transform: none;
    padding: 0;
    box-shadow: none;
    width: auto;
    gap: 2rem;
  }
`;

const MenuIcon = styled(Menu)`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <NavbarWrapper>
      <img src="images/logo.svg" alt="Logo" />
      <NavLinks $isOpen={menuOpen}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">My projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </NavLinks>
      <MenuIcon onClick={toggleMenu} />
    </NavbarWrapper>
  );
};

"use client";

import React, { useState } from "react";
import { NavbarWrapper, NavLinks, MenuIcon } from "./Navbar-style";

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

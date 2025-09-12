"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NavbarWrapper, NavLinks, MenuIcon } from "./Navbar-style";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <NavbarWrapper>
      <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />
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

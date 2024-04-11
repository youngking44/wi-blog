"use client";

import React, { useState } from "react";
import Container from "../container/Container";
import styles from "./Navbar.module.scss";
import Links from "./links/Links";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <div className={styles.logo}>Logo</div>
          <nav
            className={`${styles.listWrapper} ${isToggle ? styles.show : ""}`}
          >
            <Links />
          </nav>
          <div
            className={styles.hamburger}
            onClick={() => setIsToggle(!isToggle)}
          >
            {isToggle ? <IoMdClose size={40} /> : <RxHamburgerMenu size={40} />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;

"use client";

import React from "react";
import styles from "./Links.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/app/button/Button";

const Links = () => {
  const path = usePathname();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  //TEMPORARY
  const isAuth = true;
  const isAdmin = true;

  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li
          className={path === link.path ? styles.active : ""}
          key={link.title}
        >
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
      {isAuth ? (
        <>
          {isAdmin && (
            <li className={path === "/admin" ? styles.active : ""}>
              <Link href="/admin">Admin</Link>
            </li>
          )}
          <Button color="primary">Logout</Button>
        </>
      ) : (
        <Button color="primary">Login</Button>
      )}
    </ul>
  );
};

export default Links;

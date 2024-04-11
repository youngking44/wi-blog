import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
}

const Button = ({ color = "primary", children }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${color === "primary" ? styles.primary : ""}
      ${color === "secondary" ? styles.secondary : ""} ${
        color === "transparent" ? styles.transparent : ""
      }
      `}
    >
      {children}
    </button>
  );
};

export default Button;

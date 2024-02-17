import React from "react";
import styles from "./styles.module.css";

const Main = ({ children }) => {
  return <section className={styles.main}>{children}</section>;
};

export default Main;

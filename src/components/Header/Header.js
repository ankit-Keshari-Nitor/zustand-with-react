import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={
        clicked
          ? `${styles.nav} ${styles.responsive}`
          : `${styles.nav} ${styles.desktop__nav}`
      }
    >
      <ul>
        <Link to="/" className={styles.list}>
          <li>Counter</li>
        </Link>
        <Link to="/vote" className={styles.list}>
          <li>Vote</li>
        </Link>
        <Link to="/pokemon" className={styles.list}>
          <li>Pokemon</li>
        </Link>
        <Link to="/fruits" className={styles.list}>
          <li>Fruits</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;

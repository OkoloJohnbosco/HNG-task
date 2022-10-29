import React from "react";
import styles from "../../styles/link.module.css";

function Link({ id, href, text }) {
  return (
    <a id={id} href={href} className={styles.container}>
      <div>
        <span>{text}</span>
      </div>
    </a>
  );
}

export default Link;

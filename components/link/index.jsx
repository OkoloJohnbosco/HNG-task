import React from "react";
import styles from "../../styles/link.module.css";

function Link({ id, href, children }) {
  return (
    <a
      id={id}
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <span>{children}</span>
      </div>
    </a>
  );
}

export default Link;

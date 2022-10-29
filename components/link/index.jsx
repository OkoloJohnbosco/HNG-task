import React from "react";
import styles from "../../styles/link.module.css";

export const links = [
  {
    id: "btn__twiiter",
    href: "https://twitter.com/JohnboscoOkolo",
    subText: "Twitter Link",
  },
  {
    id: "btn__zuri",
    href: "https://training.zuri.team/",
    subText: "Zuri Team",
  },
  {
    id: "books",
    href: "http://books.zuri.team",
    subText: "Zuri Books",
  },
  {
    id: "book__python",
    href: "https://books.zuri.team/python-for-beginners?ref_id=Okolo Johnbosco",
    subText: "Python books",
  },
  {
    id: "pitch",
    href: "https://backgroundcheck.zuri.team",
    subText: "Background Check for Coders",
  },
  {
    id: "book__design",
    href: "https://books.zuri.team/design-rules ",
    subText: "Design books",
  },
];
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

import React from "react";
import Image from "next/image";
import zuriImg from "../../public/images/zurin.svg";
import ingreImg from "../../public/images/ingre.svg";
import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_zuri}>
        <Image src={zuriImg} alt="" />
      </div>
      <div>
        <p>HNG Internship 9 Frontend Task</p>
      </div>
      <div className={styles.footer_ingre}>
        <Image src={ingreImg} alt="" />
      </div>
    </div>
  );
}

export default Footer;

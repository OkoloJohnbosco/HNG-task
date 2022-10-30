import Head from "next/head";
import Footer from "../components/footer";
import Link, { links } from "../components/link";
import styles from "../styles/Home.module.css";
import ingreImg from "../public/images/profile.jpg";
import slackImg from "../public/images/slack.svg";
import gitImg from "../public/images/git.svg";
import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HNG9 first task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.main_profile}>
          <div tabIndex={1}>
            <Image src={ingreImg} alt="" id="profile__img" />
            <div>
              <AiOutlineCamera
                color="white"
                fontSize="30px"
                fontWeight="bold"
              />
            </div>
          </div>

          <p id="twitter">Okolo Johnbosco</p>
          <p id="slack">Okolo Johnbosco</p>
        </section>
        <div className={styles.main_link}>
          {links.map((link) => (
            <Link id={link.id} key={link.id} href={link.href}>
              {link.subText}
            </Link>
          ))}
        </div>
        <div className={styles.main_last}>
          <a>
            <Image src={slackImg} alt="slack image" />
          </a>
          <a
            href="https://github.com/OkoloJohnbosco/HNG-task-1"
            target="_blank"
          >
            <Image src={gitImg} alt="slack image" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

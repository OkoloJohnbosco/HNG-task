import Head from "next/head";
import Link from "../components/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HNG9 first task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link id="dd" href="#odod">
          Boy
        </Link>
      </main>
    </div>
  );
}

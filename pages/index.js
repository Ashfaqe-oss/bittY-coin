import Head from "next/head";
import Layout from "../components/Layout";
import Prices from "../components/Prices";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props.bpi);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="#">bittY !</a>
          </h1>
          <p>{props.bpi.time.updated}</p>
          
          <div>
            <Prices bpi={props.bpi} />
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span> Ash</span>
          </a>
        </footer>
        <style jsx>
          {`
            p {
              margin: 13px;
              font-size: 13px;
              font-weight: 700;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

Home.getInitialProps = async function () {
  const res = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/INR.json"
  );
  const data = await res.json();

  return {
    bpi: data,
  };
};

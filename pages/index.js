import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Olá, bem vindo</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Olá, meu nome é Ítalo. Sou desenvolvedor com foco em Python. Falo
          português e Inglês. Você pode me contactar no{" "}
          <a href="https://www.linkedin.com/in/italogustavoggsenna/">
            LinkedIn
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}

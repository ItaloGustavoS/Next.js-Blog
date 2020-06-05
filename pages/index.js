import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Olá, bem vindo</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Olá,</p>
        <p>
          Tenho 20 anos, sou estudante no curso de Análise e Desenvolvimento de
          Sistemas na Faculdade Pitágoras, falo Português e Inglês, buscando
          ampliar meus conhecimentos em programação e desenvolvimento de
          sistemas, atualmente com foco em Python.{" "}
        </p>
        <p>
          Você pode me contactar no{" "}
          <a href="https://www.linkedin.com/in/italogustavoggsenna/">
            LinkedIn{" "}
          </a>
          e ver meus projetos no
          <a href="https://github.com/ItaloGustavoS"> Github</a>.
        </p>
        <h1>Projetos:</h1>
        <ul>
          <li>SãoStock</li>
          <li>Google Page</li>
          <li>MP4 To Gif Converter</li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Olá, bem vindo</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Olá, meu nome é Ítalo.</p>
        <p>
          Sou desenvolvedor com foco em Python. Falo português e Inglês. Você
          pode me contactar no{" "}
          <a href="https://www.linkedin.com/in/italogustavoggsenna/">
            LinkedIn
          </a>
          .
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    <li className={utilStyles.listItem} key={id}>
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a>{title}</a>
    </Link>
    <br />
    <small className={utilStyles.lightText}>
      <Date dateString={date} />
    </small>
  </li>
  
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

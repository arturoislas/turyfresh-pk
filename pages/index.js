import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Soy Tury, ingeniero de día, rapero de noche. Puedes escucharme en {' '}
          <a href="https://open.spotify.com/artist/6Hk26Kx9gPWLxXDtEH5vr0?si=OAOnCKXgT7uQ1QKWvwve6Q">Spotify</a> y demás plataformas de streaming.</p>
        <p>
          Mi más reciente proyecto es Brillo Box, una colaboración a lado de Ali Salah Rasé y Lunu Beats. Nuestros 3 sencillos <a href="https://www.youtube.com/watch?v=t0iBwLQ0-Rw">1M</a>, <a href="https://www.youtube.com/watch?v=EP5CH1tDdcU">Sini</a> y <a href="https://www.youtube.com/watch?v=EP5CH1tDdcU">Pelé</a> ya están disponibles en todas las plataformas.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Música</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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
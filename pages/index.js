import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import NavBar from '../components/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Austin Barron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <NavBar />
      <section id="home" className={utilStyles.home}>
        <Image
          src="/../public/AusProfile.jpg" // Route of the image file
          height={200} // Desired size with correct aspect ratio
          width={200} // Desired size with correct aspect 
          className={utilStyles.borderCircle}
          alt="Austin Barron"
        />
        <h1 className={styles.title}> Austin Barron </h1>
        <h5> A lad to remember! </h5>
      </section>

      <section id="writings" className={utilStyles.writing}>WRITINGS</section>
      <section id="films" className={utilStyles.film}>FILMS</section>
      <section id="misc" className={utilStyles.misc}>MISC</section>
      <section id="contact" className={utilStyles.contact}>CONTACT</section>


      </main>

      <footer>
        <p>A Foggy Production</p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

import styles from './Hero.module.css';
import Head from 'next/head';

export default function Hero() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metta Muse",
              "url": "https://appscrip-task-dhruvparmar.netlify.app",
              "logo": "https://appscrip-task-dhruvparmar.netlify.app/logo.png",
            }),
          }}
        />
      </Head>
      <section className={styles.hero}>
        <div className={styles.mobileHeading}>
          <p className={styles.mobNav}>Home</p>
          <span>|</span>
          <p>Shop</p>
        </div>
        <div className={styles.titles}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.subheading}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
      </section >
    </>
  )
}

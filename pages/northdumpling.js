import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Drinks Food Life</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}></div>
        <div className={styles.submain}>
          <p>
            North Dumpling you are the most beautiful dumpling spot and you dont
            even know it. I follow the directions for your frozen dumplings that
            you pasted on to the glass display next to the spring rolls
            seemingly years ago. Eternal endless bliss pours through your
            dumplings. Bountiful is the vitality of the owners ps.
          </p>
        </div>
        <div className={styles.subsubmain}>
          
        </div>
        <div className={styles.smain}>
          <img
            className="img1"
            src="https://lh3.googleusercontent.com/SpfSt4EadOjpRUZCfjEPu_bl5mCTyXq5skTyHKKqwcCt1hUzXHZ5ZxU9rPg_oY4e_tIZQQnZb4RD4FjBFzJTmMGKArLmctic3R1oD7GbBy_kXHazlVy1QdGWiN0ywz1GGenQRrCl2w=w2400"
          />{" "}
        </div>
        <div className={styles.smain3}>
          <p>
            Here's is another section its important we need more content why? I
            thinking its a visual thing. Cards, Carousel, some animation, some
            hover effects. These are things that make something seem
            professional.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <ContentCard
          img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Drinking Amaros at ZXY Gallery"
          description="Amaro Montenegro making an appearance at ZXY Gallery"
        />

        <ContentCard
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="On the beauty of North Dumpling"
          description="Change me "
        />
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title> Grand Army Punch by @chemixtry</title>
        <meta name="liquor, cocktail, drinks, tasty" content="Delicious Summer Cocktails by Chemixtry. Tasty Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <p className={headerStyles.description}>
            Summer Cocktails pt. 2 - Grand Army Punch
            <br />
            by @chemixtry
            <div className="image-wrapper">
              <Image
                className="card4"
                alt="cocktail"
                width={640}
                height={640}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1660751024/drinksfoodlife/grandarmypunch_e9pums.jpg"
              />{" "}
            </div>
          </p>
          <br />
          <p>
            Summer has indeed hit us with some heat. A good elixer for all this sun and humidity is a delicious cocktail by @chemixtry.
          </p>
          <br />
          <p>Grand Army Punch
			<br/>
In 1883, Rochester, NY bartender, Patrick H. "Patsy" McDonough published this recipe specifically to celebrate the Grand Army of the Republic in observance of Memorial Day; some of whom were his personal friends and acquaintances fighting for the Union in the Civil War. For 1 serving of his Grand Army Punch:
			<br/>
			<br/>
1 oz cognac
			<br/>
1 oz oloroso sherry
			<br/>
1 oz white dessert wine
			<br/>
3 oz champagne
			<br/>
0.5 oz lemon juice
			<br/>
Oleo Saccharum from previous recipe ~0.5 oz
			<br/>
Pineapple rings, orange and lemon slices
			<br/>
			<br/>
You could really do almost anything with an oleo saccharum. Keep it simple and pour some good gin or rum over it. But don't forget the ice!
			<br/>
		</p>
          <br />
          <p>
            Checkout{" "}
            <a href="https://www.instagram.com/chemixtry/">
              <u>Chemixtry's</u>
            </a>{" "}
            instagram for more cocktail ideas. They have a ton of drink recipes
            to try.
          </p>
        </div>
      </div>
      <ContentCard />
    </>
  );
}
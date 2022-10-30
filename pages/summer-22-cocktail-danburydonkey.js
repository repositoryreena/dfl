import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ContentCard from "../components/ContentCard";
import headerStyles from "../styles/Header.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Danbury Donkey by @chemixtry</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"/>
        <meta name="description" content="Drinks Food Life. A Bushwick based publication covering the tastiest things in NYC and the rest of the world." />
       <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.article1}>
          <p className={headerStyles.description}>
            Summer Cocktails pt. 1 - The Danbury Donkey
            <br />
            by @chemixtry
            <div className="image-wrapper">
              <Image
                className="card4"
                alt="cocktail"
                width={640}
                height={640}
                src="https://res.cloudinary.com/adamaslan/image/upload/v1655411125/drinksfoodlife/danburydonkey_mdavxe.jpg"
              />{" "}
            </div>
          </p>
          <br />
          <p>
            Summer you say? Is it safe to come out yet? Finally, the sun and
            heat have descended upon us. Time to get out the beach chairs, pool
            floaties, tiny umbrellas, and whip up some beachside beverages with
            our summer friends, Ginger, Sherry and some oleo saccharum. Part 1
            of this series focus on the Danbury Donkey.
          </p>
          <br />
          <p>
            On the topic of non-alcoholic beer, I made a flavorful non-alcoholic
            cocktail for a wedding last year, spinning-off the Moscow Mule; I
            call it the Danbury Donkey. This is a really simple mixed drink you
            can make at a party or bring to the beach. For a non-alcoholic
            cocktail, or mocktail, ginger beer is very common; it has a lot of
            flavor, isn't too sweet and tastes ever so refreshing. But we're not
            pouring ginger beer into a glass and calling it a cocktail. In fact,
            before you pour any ginger beer in, start with a fresh lime and some
            mint sprigs. Cut the lime up into a few pieces, toss them in a cup
            with the mint and 2 tsp of sugar. Muddle muddle muddle, rocking in
            the well, rocking in the well. Sorry, muddle it, get all the lime
            juice out, then add ice cubes and pour in the ginger beer. You may
            also want to add some French Lemonade and/or some spicy chili
            bitters if you have any.
          </p>{" "}
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

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

const ContentCard = () => {
  return (
    <div className={styles.cards3}>
      <Link href="/amaromontenegro" passHref>
        <div className={styles.card3}>
          <Image
            alt="Amaro"
            className="card4"
            width={500}
            height={500}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654725062/drinksfoodlife/amaro-monte_omsl1h.jpg"
          />{" "}
          <h2> Drinking Amaro Montenegro at ZXY Gallery</h2>{" "}
          <h3>A delicious party.</h3>
        </div>
      </Link>

      <Link href="/naturalwine" passHref>
        <div className={styles.card3}>
          <Image
            alt="wine"
            className="card4"
            width={500}
            height={500}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654718485/drinksfoodlife/coup-wine_pjdgdv.jpg"
          />{" "}
          <h2> An Awkward Quest</h2> <h3>For a Funky Natural Red</h3>
        </div>
      </Link>

      <Link href="/tealove" passHref>
        <div className={styles.card3}>
          <Image
            alt="Tea"
            className="card4"
            width={500}
            height={500}
            src="https://res.cloudinary.com/adamaslan/image/upload/v1654718487/drinksfoodlife/teasecret1_corwi6.jpg"
          />{" "}
          <h2> On the Love of Loose Tea</h2>
          <h3>Especially the MIA airport location</h3>
        </div>
      </Link>
    </div>
  );
};
export default ContentCard;

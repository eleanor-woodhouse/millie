import Image from "next/image";
import styles from "./page.module.scss";
import { getCategories, getHomepageImage } from "@/sanity/api";
import { Orbitron } from "next/font/google";

const inter = Orbitron({ subsets: ["latin"], weight: ["400"] });

export default async function Home() {
  const homepageImage = await getHomepageImage();
  const categories = await getCategories();

  function getWidthHeight(width: number, height: number): number[] {
    const size = 250;
    if (width <= size && height <= size) {
      return [width, height];
    }

    let divisor: number;

    if (width > height) {
      divisor = width / size;
    } else {
      divisor = height / size;
    }

    const newWidth = width / divisor;
    const newHeight = height / divisor;

    return [newWidth, newHeight];
  }

  return (
    <main>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h3 className={styles.title}>MILLIE DOW</h3>
          <p className={styles.subtitle}>Arts Writer</p>
        </div>
        {homepageImage.map((image) => {
          const widthHeight = getWidthHeight(
            image.image.dimensions.width,
            image.image.dimensions.height,
          );
          return (
            <div
              key={image.image.id}
              className={styles.imageWrap}
              style={{ width: widthHeight[0], height: widthHeight[1] }}
            >
              <Image
                priority={true}
                src={image.image.url}
                fill
                style={{ objectFit: "contain" }}
                alt="MillieDow.Com"
              />
            </div>
          );
        })}
      </div>
      <div className={styles.writing}>
        <div className={styles.writingCategory}>
          <p className={styles.writingCategoryHeaders}>About</p>
          <p className={styles.writingListItem}>
            Millie Dow is an arts writer based in Melbourne
          </p>
        </div>
      </div>
      <div className={styles.writing}>
        <div className={styles.writingCategory}>
          <p className={styles.writingCategoryHeaders}>Contact</p>
          <p className={styles.writingListItem}>milledow@gmail.com</p>
          <p className={styles.writingListItem}>+61 2984 7832</p>
        </div>
      </div>
      <div className={styles.writing}>
        {categories.map((category) => {
          return (
            <div key={category._id} className={styles.writingCategory}>
              <p className={styles.writingCategoryHeaders}>
                {category.textTitle}
              </p>
              {category.writtenTexts.map((text) => (
                <p key={text._id} className={styles.writingListItem}>
                  {text.date} {text.title} – {text.publishedBy}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}

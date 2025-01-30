import Image from "next/image";
import styles from "./page.module.scss";
import {
  getAboutText,
  getCategories,
  getContactDetails,
  getHomepageImage,
} from "@/sanity/api";
import { Orbitron } from "next/font/google";

const inter = Orbitron({ subsets: ["latin"], weight: ["400"] });

export default async function Home() {
  const homepageImage = await getHomepageImage();
  const categories = await getCategories();
  const contactDetails = await getContactDetails();
  const aboutText = await getAboutText();

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
      <div className={styles.birdContainer}>
        <img src="/swallows.gif" alt="birds" width="115%" />
      </div>
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
                alt={image.altText}
                title={image.altText}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.writing}>
        <div className={styles.writingCategory}>
          <p className={styles.writingCategoryHeaders}>About</p>
          <p className={styles.writingListItem}>{aboutText.text}</p>
        </div>
      </div>
      <div className={styles.writing}>
        <div className={styles.writingCategory}>
          <p className={styles.writingCategoryHeaders}>Contact</p>
          {contactDetails.contactLines.map((line) => (
            <p key={line} className={styles.writingListItem}>
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.writing}>
        {categories.map((category) => {
          return (
            <div key={category._id} className={styles.writingCategory}>
              <p className={styles.writingCategoryHeaders}>
                {category.categoryTitle}
              </p>
              {category.writtenTexts.map((text) => {
                if (!text.link && !text.pdf) {
                  return (
                    <div
                      key={text._id}
                      className={styles.writingListItemWrapper}
                    >
                      <p className={styles.year}>{text.date}</p>
                      <p
                        key={text._id}
                        className={(styles.writingListItem, styles.tooltip)}
                      >
                        {text.title} – {text.publishedBy}
                        <span className={styles.tooltipText}>
                          {text.altText}
                        </span>
                      </p>
                    </div>
                  );
                }
                let link: string;
                text.link
                  ? (link = text.link)
                  : text.pdf.url
                    ? (link = text.pdf.url)
                    : (link = "");
                return (
                  <div key={text._id} className={styles.writingListItemWrapper}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.textLink}
                    >
                      <p className={styles.year}>{text.date}</p>
                      <p
                        key={text._id}
                        className={(styles.writingListItem, styles.tooltip)}
                      >
                        {text.title} – {text.publishedBy}
                        <span
                          className={text.altText ? styles.tooltipText : ""}
                        >
                          {text.altText}
                        </span>
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}

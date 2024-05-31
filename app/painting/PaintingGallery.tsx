"use client";

import { useState } from "react";
import { Gallery, Image } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { PageLayout } from "../PageLayout";
import { GalleryThumbnailImage } from "./GalleryThumbnailImage";
import styles from "./PaintingGallery.module.scss";

interface Props {
  images: Image[];
}

export const PaintingGallery = ({ images }: Props) => {
  const [index, setIndex] = useState(-1);

  const isOpen = index >= 0;
  const close = () => setIndex(-1);

  const handleClick = (index: number) => {
    setIndex(index);
  };

  return (
    <PageLayout
      title="Painting like Eric Carle through the years."
      className={isOpen ? styles.inactive : undefined}
    >
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        thumbnailImageComponent={GalleryThumbnailImage}
      />
      <Lightbox
        className={styles.lightbox}
        plugins={[Captions]}
        slides={images}
        open={isOpen}
        index={index}
        close={close}
        animation={{
          fade: 100,
          swipe: 0,
        }}
      />
    </PageLayout>
  );
};

import Image from "next/image";
import type { ThumbnailImageProps } from "react-grid-gallery";

export const GalleryThumbnailImage = ({
  imageProps: { src, alt, style },
}: ThumbnailImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      style={style}
      width={style.width as number}
      height={style.height as number}
      unoptimized
    />
  );
};

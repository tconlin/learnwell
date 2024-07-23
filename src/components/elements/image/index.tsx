import { forwardRef, ImgHTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
  source: string;
  linkTo?: string;
  alt?: string;
}

export const Img = forwardRef<HTMLImageElement, ImageProps>(
  ({ children, linkTo, alt, width, height, source, ...props }, ref) =>
    linkTo ? (
      <Link href={linkTo}>
        <Image
          src={source}
          width={width}
          height={height}
          priority
          alt={alt ? alt : "Learnwell educational videos"}
        />
      </Link>
    ) : (
      <Image
        src={source}
        width={width}
        height={height}
        priority
        alt={alt ? alt : "Learnwell educational videos"}
      />
    )
);

Img.displayName = "Image";

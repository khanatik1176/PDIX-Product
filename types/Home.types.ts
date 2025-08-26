import { StaticImageData } from "next/image";

export type HomeCardProps = {
  title: string;
  description: string;
  actionText: string;
  image: StaticImageData;
  imageAlt: string;
  backgroundColor?: string;
}

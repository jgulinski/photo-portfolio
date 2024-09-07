import { StaticImageData } from "next/image";

export type Photo = {
    id: number;
    src: StaticImageData;
    alt: string;
    category: string | null;
  };
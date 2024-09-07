"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { Photo } from "../objects/Photo";
import photo1 from "/public/photo1.jpg";
import photo2 from "/public/photo2.jpg";
import photo3 from "/public/photo3.jpg";
import photo4 from "/public/photo4.jpg";
import photo5 from "/public/photo5.jpg";
import photo6 from "/public/photo6.jpg";

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo: Photo) => (
          <div
            key={photo.id}
            className="relative aspect-square cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              quality={100}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <Lightbox
          src={selectedPhoto.src.src}
          alt={selectedPhoto.alt}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

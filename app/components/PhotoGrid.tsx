"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./LightBox";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

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
            />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <Lightbox
          src={selectedPhoto.src}
          alt={selectedPhoto.alt}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

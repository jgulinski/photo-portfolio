"use client";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 bg-slate-800 bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-4xl max-h-4xl">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

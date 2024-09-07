import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Image from "next/image";
import { Photo } from "./objects/Photo";

async function getPhotos(): Promise<Photo[]> {
  return [
    { id: 1, src: "/photo1.jpg", alt: "Image 1", category: "nature" },
    { id: 2, src: "/photo2.jpg", alt: "Image 2", category: "nature" },
    { id: 3, src: "/photo3.jpg", alt: "Image 3", category: "nature" },
    { id: 4, src: "/photo4.jpg", alt: "Image 4", category: null },
    { id: 5, src: "/photo5.jpg", alt: "Image 5", category: null },
    { id: 6, src: "/photo6.jpg", alt: "Image 6", category: null },
  ];
}

export default async function Home() {
  const photos = await getPhotos();

  return (
    <div className="min-h-screen text-slate-100 dark:text-slate-800 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-dark.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-10"></div>
      <div className="relative z-20 mx-auto flex flex-col min-h-screen max-w-screen-2xl">
        <Header />
        <main className="flex-grow">
          <MainSection photos={photos} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

import Image from "next/image";
import { Footer } from "./ui/footer/footer";
import SearchBar from "./ui/search/search";
import Card from "./ui/card/card";
import Sprite from "./ui/sprite/sprite";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <SearchBar />
        <Card />
        <Sprite />
      </main>
      <Footer />
    </div>
  );
}

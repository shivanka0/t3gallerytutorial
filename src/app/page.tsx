import Link from "next/link";
import { db } from "~/server/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
export const dynamic = 'force-dynamic';
import { getMyImages } from "~/server/queries";
import Image from "next/image";
async function Images() {
    const images = await getMyImages();
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 h-48 flex-col">
            <Image src={image.url} style={{objectFit: "contain"}} width={192} height={192} alt={image.name}/>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sigin in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

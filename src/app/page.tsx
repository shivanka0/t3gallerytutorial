import Link from "next/link";
import { db } from "~/server/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
export const dynamic = 'force-dynamic';
import { getMyImages } from "~/server/queries";
async function Images() {
    const images = await getMyImages();
    return (
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 flex flex-col">
            <img src={image.url}/>
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

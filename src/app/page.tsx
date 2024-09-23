import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic';

const mockUrls = [
  "https://utfs.io/f/Uso6XTuymfAdIKNUEID0z7SWDMOd4JKLoGw2cexPCuUVlaTB",
  "https://utfs.io/f/Uso6XTuymfAd9fcgHCmEcaeQhuAf0v8UjXz32mtNn6J4GH5d",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}

import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/Uso6XTuymfAdIKNUEID0z7SWDMOd4JKLoGw2cexPCuUVlaTB",
  "https://utfs.io/f/Uso6XTuymfAd9fcgHCmEcaeQhuAf0v8UjXz32mtNn6J4GH5d",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}

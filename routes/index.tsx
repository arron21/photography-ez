import "jsr:@std/dotenv/load";
import { Gallery } from "../islands/Gallery.tsx";

export default function Home() {
  const SiteName = Deno.env.get("SITE_NAME");
  return (
    <>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl py-4">
          {SiteName ?? "Photography Portfolio"}
        </h1>
        <Gallery />
      </div>
    </>
  );
}

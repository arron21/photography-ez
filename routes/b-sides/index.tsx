import { RouteContext } from "$fresh/server.ts";
import { Gallery } from "../../islands/Gallery.tsx";
import { images } from "./gallery-opt/images.ts";

export default function MyPage(req: Request, ctx: RouteContext) {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>

        <h1 class="text-7xl">
            B Sides
        </h1>
        <p class="text-balance">This collection is comprised of photos that I think are interesting but I wouldn't consider my best work.</p>
        </div>
        <Gallery images={images} />
      </div>
    </>
  );
}

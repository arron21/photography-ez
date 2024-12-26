import { RouteContext } from "$fresh/server.ts";
import { Gallery } from "../../islands/Gallery.tsx";
import { GalleryInfo } from "../../islands/GalleryInfo.tsx";
import { images } from "./gallery-opt/images.ts";

export default function MyPage(req: Request, ctx: RouteContext) {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2">

        <GalleryInfo heading={'B Sides'} copy={`This collection is comprised of photos that I think are interesting but I wouldn't consider my best work.`} />
        <Gallery images={images} />
      </div>
    </>
  );
}

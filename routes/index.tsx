import "jsr:@std/dotenv/load";
import { Gallery } from "../islands/Gallery.tsx";
import { GalleryInfo } from "../islands/GalleryInfo.tsx";

export default function Home() {
  const SiteName = Deno.env.get("SITE_NAME");
  return (
    <>
      <div class="">

        <GalleryInfo heading={SiteName ?? "Photography Portfolio"} copy={`Thanks for checking out my photography. My photography is often what catches my eye. The juxtaposition of
            nature and human made objects is what I find interesting. We build
            tall sky scrapers so we can see beyond the trees. We build
            televisions so we can watch birds inside of a box. I try to capture
            the balance between our human existence and the existence of Earth
            itself.`} />
      
      </div>
    </>
  );
}

import "jsr:@std/dotenv/load";
import { Gallery } from "../islands/Gallery.tsx";

export default function Home() {
  const SiteName = Deno.env.get("SITE_NAME");
  return (
    <>
      <div class="">
        <h1 class="text-7xl py-4 mb-8">
          {SiteName ?? "Photography Portfolio"}
        </h1>
        <div class="text-3xl leading-relaxed text-balance">

        <p>Thanks for checking out my photography</p>
        <p>I shoot on a Canon EOS Rebel SL1, a camera from 2013.</p>
        <p>My photography is often what catches my eye. The juxtaposition of nature and human made objects is what I find interesting. We build tall sky scrapers so we can see beyond the trees. We build televisions so we can watch birds inside of a box. I try to capture the balance between our human existence and the existence of Earth itself.</p>
        </div>
      </div>
    </>
  );
}

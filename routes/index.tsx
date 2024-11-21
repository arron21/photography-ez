import { Gallery } from "../islands/Gallery.tsx";
import "jsr:@std/dotenv/load";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  const SiteName = Deno.env.get("SITE_NAME");
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        >
        </link>
      </Head>
      <div class="px-4 py-8 mx-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl py-4">
            {SiteName ?? "Arron McCrory Photography"}
          </h1>
          <Gallery />
        </div>
      </div>
    </>
  );
}

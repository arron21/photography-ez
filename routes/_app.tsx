import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  const title =  Deno.env.get("SITE_TITLE");
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'photo-ez'}</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        >
        </link>
      </head>
      <body class="leading-tight bg-white dark:bg-gray-950 text-slate-900 dark:text-white leading-loose">
        <div class="grid">


        <nav class="text-xl grid grid-flow-row sm:grid-flow-col">
  <a
    href="/"
    class="px-4 py-2 border border-r-0 dark:border-gray-100 dark:text-white hover:bg-gray-100 hover:text-black transition-colors"
  >
    Home
  </a>
  <a
    href="/favorites"
    class="px-4 py-2 border border-r-0 dark:border-gray-100 dark:text-white hover:bg-gray-100 hover:text-black transition-colors"
  >
    Favorites
  </a>
  <a
    href="/b-sides"
    class="px-4 py-2 border border-r-0 dark:border-gray-100 dark:text-white hover:bg-gray-100 hover:text-black transition-colors"
  >
    B Sides
  </a>
  <a
    href="/contact"
    class="px-4 py-2 border dark:border-gray-100 dark:text-white hover:bg-gray-100 hover:text-black transition-colors"
  >
    Contact
  </a>
</nav>



<section class="m-6">


          <Component />
</section>
        </div>
      </body>
    </html>
  );
}

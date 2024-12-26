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
      <body class="bg-white dark:bg-gray-950 text-slate-900 dark:text-white leading-loose">
        <div class="grid m-6">
          <nav class="grid grid-flow-col my-3">
            <a href="/">Home</a>
            <a href="/favorites">Favorites</a>
            <a href="/b-sides">B Sides</a>
            <a href="/contact">Contact</a>
          </nav>
          <Component />
        </div>
      </body>
    </html>
  );
}

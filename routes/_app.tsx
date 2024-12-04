import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>photo-ez</title>
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
      <body class="bg-white dark:bg-slate-800 text-slate-900 dark:text-white leading-loose">
        <div class="px-4 py-8 mx-auto ">
          <nav class="text-center flex gap-3 justify-center">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
          <Component />
        </div>
      </body>
    </html>
  );
}

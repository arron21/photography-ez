// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $b_sides_gallery_opt_images from "./routes/b-sides/gallery-opt/images.ts";
import * as $b_sides_index from "./routes/b-sides/index.tsx";
import * as $contact_index from "./routes/contact/index.tsx";
import * as $favorites_gallery_opt_images from "./routes/favorites/gallery-opt/images.ts";
import * as $favorites_index from "./routes/favorites/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $Gallery from "./islands/Gallery.tsx";
import * as $GalleryInfo from "./islands/GalleryInfo.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/b-sides/gallery-opt/images.ts": $b_sides_gallery_opt_images,
    "./routes/b-sides/index.tsx": $b_sides_index,
    "./routes/contact/index.tsx": $contact_index,
    "./routes/favorites/gallery-opt/images.ts": $favorites_gallery_opt_images,
    "./routes/favorites/index.tsx": $favorites_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Gallery.tsx": $Gallery,
    "./islands/GalleryInfo.tsx": $GalleryInfo,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

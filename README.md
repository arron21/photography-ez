# Photograph Portfolio

[![Made with Fresh](https://fresh.deno.dev/fresh-badge-dark.svg)](https://fresh.deno.dev)

An easy to deploy photography portfolio

### Usage

Create routes for each collection of photos and include a gallery folder in each of them. ex: /routes/b-sides/gallery/PHOTOSHERE

run `deno task img-multi` 

Your photo files will have thumbnails created using https://deno.land/x/imagescript@1.3.0

The thumbnails are saved to `/static/gallery-opt`

A `images.ts` will also be generated for each route/gallery you defined, you can import this into your route Gallery island, see the favorites route for an example

### Gallery.tsx
The Gallery.tsx island uses https://github.com/dimsemenov/photoswipe

### Home Page
Using environment variables, you can change your site name
```
Deno.env.get("SITE_NAME");
```

Or you could just update the HTML in `index.tsx`
```
    <h1 class="">
        {SiteName ?? "Photography Portfolio"}
    </h1>
```

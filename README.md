# Photograph Portfolio

[![Made with Fresh](https://fresh.deno.dev/fresh-badge-dark.svg)](https://fresh.deno.dev)

An easy to deploy photography portfolio


### Usage

Put all your high resolution photo files into the `/static/gallery` folder

run `deno task img` 

Your photo files will have thumbnails created using https://deno.land/x/imagescript@1.3.0

The thumbnails are saved to `/static/gallery-opt`

A `static/gallery-opt/images.ts` will also be generated that contains an array of all your images. You can import the `images` variable from this file into any UI file.

### Gallery.tsx
The Gallery.tsx island uses https://github.com/dimsemenov/photoswipe

### Home Page
Using environment variables, you can change your site name
```
Deno.env.get("SITE_NAME");
```

Or you could just update the HTML in `index.tsx`
```
    <h1 class="text-4xl py-4">
        {SiteName ?? "Photography Portfolio"}
    </h1>
```

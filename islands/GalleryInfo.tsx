import { JSX } from "preact";
import { useEffect } from "preact/hooks";
import PhotoSwipeLightbox from "photoswipe/lightbox";

export function GalleryInfo({ ...props }) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => lightbox.destroy(); // Clean up
  }, []);

  return (
    <div>
      <h1 class="text-5xl md:text-10xl">
        {props.heading}
      </h1>
      <p class="text-balance text-3xl md:text-7xl">
        {props.copy}
        
      </p>
  </div>
  );
}

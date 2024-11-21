import { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { images } from "../static/gallery-opt/images.ts";

// import { IS_BROWSER } from "$fresh/runtime.ts";
import PhotoSwipeLightbox from "photoswipe/lightbox";
// import 'photoswipe/style.css';

export function Gallery(props: JSX.HTMLAttributes<any>) {
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
    <div id="gallery" class="gallery-container">
      {images.map((image, index) => (
        <a
          class={"block mb-2 mr-2 rounded-lg shadow-lg overflow-hidden"}
          href={"gallery/" + image.name}
          data-pswp-width={image.widthFull}
          data-pswp-height={image.heightFull}
          key={"key" + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={"gallery-opt/" + image.name} alt="" />
        </a>
      ))}
    </div>
  );
}

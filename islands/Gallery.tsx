import { JSX } from "preact";
import { useEffect } from "preact/hooks";
import PhotoSwipeLightbox from "photoswipe/lightbox";

interface Image {
  name: string;
  widthFull: number;
  heightFull: number;
}

interface GalleryProps extends JSX.HTMLAttributes<any> {
  images: Image[];
}

export function Gallery({ images, ...props }: GalleryProps) {
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
    <div id="gallery" class="grid grid-cols-3 gap-2 md:gap-4 ">
      {images.map((image, index) => (
        <a
          class="aspect-square object-cover overflow-hidden"
          href={"gallery/" + image.name}
          data-pswp-width={image.widthFull}
          data-pswp-height={image.heightFull}
          key={"key" + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="aspect-square object-cover transition-transform duration-300 hover:scale-105"
            width={image.width}
            src={"gallery-opt/" + image.name}
            alt=""
          />
        </a>
      ))}
    </div>
  );
}

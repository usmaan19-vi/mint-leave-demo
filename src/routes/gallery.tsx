import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { GALLERY } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mint Leaves" },
      {
        name: "description",
        content:
          "A look inside the Mint Leaves concept — the dining room, the table and the plate. Sample photography standing in for the restaurant's own photos.",
      },
      { property: "og:title", content: "Gallery — Mint Leaves" },
      {
        property: "og:description",
        content:
          "The dining room, the table and the plate — sample photography from the Mint Leaves concept website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const navigate = useCallback((index: number) => setOpenIndex(index), []);

  return (
    <>
      <section className="bg-forest-deep py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mint">
            Sample Photography
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ivory/80">
            Tap any photo to view it full-size. These images are temporary
            stand-ins until the restaurant's own photographs are ready.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="columns-2 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 sm:[&>*]:mb-5">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${img.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(15,45,30,0.12)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="font-display text-lg italic text-ivory">
                    {img.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {openIndex !== null && (
        <Lightbox
          images={GALLERY}
          index={openIndex}
          onClose={close}
          onNavigate={navigate}
        />
      )}
    </>
  );
}

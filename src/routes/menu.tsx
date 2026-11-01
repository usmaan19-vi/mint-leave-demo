import { createFileRoute } from "@tanstack/react-router";

import { MenuSection } from "@/components/MenuSection";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu — Mint Leaves" },
      {
        name: "description",
        content:
          "Browse the Mint Leaves sample menu — starters, main course, beverages and desserts, with Kashmiri classics and North Indian favourites. Concept website with sample dishes and prices.",
      },
      { property: "og:title", content: "Our Menu — Mint Leaves" },
      {
        property: "og:description",
        content:
          "Starters, main course, beverages and desserts — the Mint Leaves sample menu for the Anantnag concept restaurant.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="bg-forest-deep py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mint">
            Sample Menu
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ivory/80">
            Filter by course or by vegetarian preference — every dish here is
            illustrative sample content for the concept demo.
          </p>
        </div>
      </section>
      <MenuSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" />
    </>
  );
}

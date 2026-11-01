import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Sparkles, UtensilsCrossed } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import interiorImage from "@/assets/about-interior.jpg";
import { CtaBanner } from "@/components/CtaBanner";
import { LeafIcon } from "@/components/LeafIcon";
import { MenuSection } from "@/components/MenuSection";
import { Reveal } from "@/components/Reveal";
import { DISHES } from "@/data/menu";
import { GALLERY } from "@/data/gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mint Leaves — Fresh Flavours. Memorable Moments." },
      {
        name: "description",
        content:
          "Mint Leaves is a neighbourhood restaurant concept for the KP Road–Mattan area of Anantnag, Kashmir — Kashmiri classics, North Indian favourites and warm hospitality in a modern dining room. Concept website with sample content.",
      },
      { property: "og:title", content: "Mint Leaves — Fresh Flavours. Memorable Moments." },
      {
        property: "og:description",
        content:
          "A restaurant concept for the KP Road–Mattan area of Anantnag, Kashmir. Explore the sample menu and book a table in the demo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const POPULAR = DISHES.filter((d) => d.popular);
const GALLERY_PREVIEW = GALLERY.slice(0, 4);

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Overhead spread of Indian dishes on a dark green dining table"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <div className="fade-up max-w-2xl text-ivory">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-mint">
              <LeafIcon className="h-4 w-4 text-mint" />
              Anantnag, Kashmir
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl">
              Mint Leaves
            </h1>
            <p className="mt-4 font-display text-2xl italic text-mint sm:text-3xl">
              Fresh Flavours. Memorable Moments.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
              A modern neighbourhood kitchen for the KP Road–Mattan area —
              saffron-scented Kashmiri classics, tandoor favourites and a dining
              room built for slow evenings.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/reservations"
                className="inline-flex items-center justify-center rounded-full bg-mint px-8 py-3.5 text-sm font-semibold text-forest-deep shadow-lg transition-all hover:-translate-y-0.5 hover:bg-ivory"
              >
                Book a Table
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center rounded-full border-2 border-ivory/60 px-8 py-3.5 text-sm font-semibold text-ivory transition-all hover:border-mint hover:text-mint"
              >
                Explore Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story preview */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={interiorImage}
              alt="Restaurant interior with green walls and warm lanterns"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_24px_60px_-24px_rgba(15,45,30,0.45)]"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-forest px-6 py-5 text-ivory shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold text-mint">Valley-fresh</p>
              <p className="mt-1 text-xs tracking-wide text-ivory/80">
                Sourced daily, cooked slowly
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
            Our Concept
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A calm, green table in the heart of Anantnag
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Mint Leaves brings together the flavours of the valley — kahwa and
            saffron, morels and mountain garlic — with the tandoor classics
            everyone loves. Arched booths, lantern light and a menu that
            changes with the seasons.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: Leaf,
                title: "Garden-fresh mint",
                text: "Our namesake herb shows up everywhere — chutneys, coolers, finishing oils.",
              },
              {
                icon: UtensilsCrossed,
                title: "Kashmiri & North Indian",
                text: "From dum aloo and rogan josh to butter chicken and seekh kebabs.",
              },
              {
                icon: Sparkles,
                title: "Made for occasions",
                text: "Family dinners, celebrations and quiet two-person corners alike.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint-soft text-forest">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-9 inline-flex items-center rounded-full border-2 border-forest px-8 py-3 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-primary-foreground"
          >
            Read Our Story
          </Link>
        </Reveal>
      </section>

      {/* Popular dishes */}
      <section className="bg-mint-soft/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
              Guest Favourites
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              The dishes people come back for
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              A taste of the sample menu — every dish and price here is a
              placeholder until the owner confirms the real one.
            </p>
          </Reveal>
          <MenuSection
            items={POPULAR}
            showNote={false}
            className="mt-12"
          />
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
            The Room & The Plate
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Evenings at Mint Leaves
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {GALLERY_PREVIEW.map((img, i) => (
            <Reveal key={img.src} delay={i * 90}>
              <figure className="group overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center rounded-full border-2 border-forest px-8 py-3 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-primary-foreground"
          >
            View Gallery
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

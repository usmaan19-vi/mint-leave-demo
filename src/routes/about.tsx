import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Leaf, Sprout } from "lucide-react";

import interiorImage from "@/assets/about-interior.jpg";
import spicesImage from "@/assets/gallery-spices.jpg";
import tableImage from "@/assets/gallery-table.jpg";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mint Leaves" },
      {
        name: "description",
        content:
          "The story behind Mint Leaves — a restaurant concept for the KP Road–Mattan area of Anantnag, Kashmir, built on valley-fresh ingredients and warm Kashmiri hospitality. Concept website with sample content.",
      },
      { property: "og:title", content: "About — Mint Leaves" },
      {
        property: "og:description",
        content:
          "A restaurant concept for the KP Road–Mattan area of Anantnag, built on valley-fresh ingredients and warm hospitality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Sprout,
    title: "Valley-fresh sourcing",
    text: "Vegetables from local growers, spices and saffron from Kashmiri traders, mint from the kitchen garden.",
  },
  {
    icon: Leaf,
    title: "Cooked with patience",
    text: "Slow braises, overnight marinades and a tandoor that runs all evening — nothing rushed to the table.",
  },
  {
    icon: HeartHandshake,
    title: "Kashmiri hospitality",
    text: "Guests are treated the way the valley treats visitors: generously, with kahwa on arrival and no hurry to leave.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-forest-deep py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mint">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
            About Mint Leaves
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ivory/80">
            A concept for a neighbourhood restaurant in Anantnag — imagined in
            brand form while the real details are confirmed with the owner.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={interiorImage}
            alt="Restaurant interior with green walls, arched booths and warm lanterns"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_24px_60px_-24px_rgba(15,45,30,0.45)]"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            From an idea on KP Road to a table set for you
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            The KP Road–Mattan stretch of Anantnag has no shortage of good
            food — but the idea behind Mint Leaves was a room designed around
            it: arched booths, deep green walls, brass lanterns, and a kitchen
            that treats both a plate of dum aloo and a bowl of phirni with the
            same care.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            This website is the concept phase: the name, the tagline —{" "}
            <span className="font-display italic text-forest">
              “Fresh Flavours. Memorable Moments.”
            </span>{" "}
            — and a sample menu that shows what the restaurant could offer
            from day one.
          </p>
        </Reveal>
      </section>

      <section className="bg-mint-soft/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 110} className="h-full">
                <div className="h-full rounded-3xl bg-card p-8 shadow-[0_2px_12px_rgba(15,45,30,0.08)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-forest">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-last lg:order-first">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={tableImage}
              alt="Candlelit table with brass lantern and mint sprigs"
              className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg"
            />
            <img
              src={spicesImage}
              alt="Flat-lay of saffron, cardamom and whole spices in brass bowls"
              className="mt-8 aspect-[3/4] w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
            The Details
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Being finalised with the owner
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            The exact street address, phone number, opening hours and the
            final menu are still to be confirmed. Everything shown across this
            site — dishes, prices, photos and timings — is sample content for
            the concept presentation.
          </p>
          <Link
            to="/reservations"
            className="mt-9 inline-flex items-center rounded-full bg-forest px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
          >
            Try the Reservation Demo
          </Link>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

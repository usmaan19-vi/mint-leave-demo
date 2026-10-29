import { Link } from "@tanstack/react-router";
import { LeafIcon } from "./LeafIcon";
import { Reveal } from "./Reveal";

/** Deep-green reservation banner shown near the foot of content pages. */
export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 text-ivory sm:py-24">
      <LeafIcon
        className="leaf-float pointer-events-none absolute -left-8 top-8 h-28 w-28 text-mint/10"
      />
      <LeafIcon
        className="leaf-float pointer-events-none absolute -right-10 bottom-6 h-40 w-40 text-mint/10"
        // staggered drift
      />
      <style>{`.leaf-float:nth-of-type(2) { animation-delay: -3.5s; }`}</style>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mint">
            Reserve Your Evening
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Your Table Awaits
          </h2>
          <p className="mt-4 text-base text-ivory/80 sm:text-lg">
            Make your next meal a memorable one.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-ivory/60 px-8 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-mint hover:text-mint sm:w-auto"
            >
              Explore Menu
            </Link>
            <Link
              to="/reservations"
              className="inline-flex w-full items-center justify-center rounded-full bg-mint px-8 py-3 text-sm font-semibold text-forest-deep shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory sm:w-auto"
            >
              Book a Table
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

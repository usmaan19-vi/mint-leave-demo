import { Link } from "@tanstack/react-router";
import { LeafIcon } from "./LeafIcon";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Our Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
] as const;

const CONTACT_PLACEHOLDERS = [
  { label: "Address", value: "KP Road–Mattan area, Anantnag, Jammu and Kashmir, India" },
  { label: "Street address", value: "To be confirmed by the restaurant" },
  { label: "Phone", value: "To be confirmed by the restaurant" },
  { label: "Opening hours", value: "To be confirmed by the restaurant" },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 text-ivory">
            <LeafIcon className="h-7 w-7 text-mint" />
            <span className="font-display text-2xl font-semibold tracking-wide">
              Mint Leaves
            </span>
          </div>
          <p className="mt-4 font-display text-lg italic text-mint">
            Fresh Flavours. Memorable Moments.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
            A neighbourhood restaurant concept for the KP Road–Mattan area of
            Anantnag, Kashmir.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ivory">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ivory/75 transition-colors hover:text-mint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ivory">
            Find Us
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {CONTACT_PLACEHOLDERS.map((item) => (
              <li key={item.label}>
                <span className="font-medium text-mint">{item.label}: </span>
                <span className="text-ivory/75">{item.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-ivory/55">
            Contact details shown here are placeholders. Verified details will
            be added once confirmed by the restaurant.
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-center text-xs text-ivory/55 sm:flex-row sm:justify-between sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} Mint Leaves — concept website demo.</p>
          <p className="font-medium tracking-wide text-ivory/70">
            Concept Website — Sample Content
          </p>
        </div>
      </div>
    </footer>
  );
}

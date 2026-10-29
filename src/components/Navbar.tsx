import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LeafIcon } from "./LeafIcon";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Our Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-forest-deep/95 backdrop-blur supports-[backdrop-filter]:bg-forest-deep/85">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 text-ivory"
          aria-label="Mint Leaves — home"
        >
          <LeafIcon className="h-7 w-7 text-mint" />
          <span className="font-display text-2xl font-semibold tracking-wide">
            Mint Leaves
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.to === "/"
                ? pathname === "/"
                : pathname.startsWith(link.to);
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium tracking-wide text-ivory/85 transition-colors hover:text-mint",
                    active && "text-mint",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="/reservations"
              className="inline-flex items-center rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-sm transition-all hover:-translate-y-0.5 hover:bg-ivory hover:shadow-md"
            >
              Book a Table
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ivory transition-colors hover:bg-ivory/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-ivory/10 bg-forest-deep lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => {
              const active =
                link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium text-ivory/90 transition-colors hover:bg-ivory/10 hover:text-mint",
                      active && "bg-ivory/10 text-mint",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                to="/reservations"
                className="block rounded-full bg-mint px-5 py-3 text-center text-base font-semibold text-forest-deep"
              >
                Book a Table
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

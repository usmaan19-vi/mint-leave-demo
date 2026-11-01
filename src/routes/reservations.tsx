import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

import { ReservationForm } from "@/components/ReservationForm";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Mint Leaves" },
      {
        name: "description",
        content:
          "Try the Mint Leaves reservation demo — choose your date, time and party size. This concept website records nothing; live bookings await the owner's confirmation.",
      },
      { property: "og:title", content: "Reservations — Mint Leaves" },
      {
        property: "og:description",
        content:
          "Choose your date, time and party size in the Mint Leaves reservation demo — a front-end concept for the Anantnag restaurant.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReservationsPage,
});

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Location",
    value: "KP Road–Mattan area, Anantnag, Jammu and Kashmir",
    note: "Exact street address to be confirmed by the restaurant.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "To be confirmed by the restaurant",
    note: "No phone line is live yet — this demo does not contact anyone.",
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: "To be confirmed by the restaurant",
    note: "Sample time slots in the form are placeholders only.",
  },
];

function ReservationsPage() {
  return (
    <>
      <section className="bg-forest-deep py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mint">
            Reserve Your Evening
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
            Reservations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ivory/80">
            Walk through the booking experience — review your details and
            receive a demo reference number. Nothing is sent to the
            restaurant.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <Reveal>
            <ReservationForm />
          </Reveal>
          <Reveal delay={140} className="space-y-5">
            {INFO_ITEMS.map(({ icon: Icon, label, value, note }) => (
              <div
                key={label}
                className="rounded-3xl border border-border bg-card p-6 shadow-[0_2px_12px_rgba(15,45,30,0.08)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-soft text-forest">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em]">
                  {label}
                </h2>
                <p className="mt-2 text-sm font-medium text-foreground">{value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {note}
                </p>
              </div>
            ))}
            <div className="rounded-3xl border border-gold/50 bg-gold/10 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-forest">
                Demonstration only
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-foreground">
                This form is part of the concept website. Live bookings would
                need the restaurant owner's approval plus a real booking or
                messaging integration.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

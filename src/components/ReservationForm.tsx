import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Info,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
  "9:30 PM", "10:00 PM",
] as const;

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 8, 10, 12] as const;

interface ReservationValues {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
}

const EMPTY: ReservationValues = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  requests: "",
};

function todayISO(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function makeReference(): string {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `ML-DEMO-${code}`;
}

function validate(values: ReservationValues) {
  const errors: Partial<Record<keyof ReservationValues, string>> = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  const phone = values.phone.replace(/[\s-]/g, "");
  if (!/^\d{10}$/.test(phone)) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!values.date) {
    errors.date = "Please choose a reservation date.";
  } else if (values.date < todayISO()) {
    errors.date = "Reservations cannot be made for a past date.";
  }
  if (!values.time) errors.time = "Please choose a preferred time.";
  if (!values.guests) errors.guests = "Please select the number of guests.";
  return errors;
}

const inputClasses = cn(
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground",
  "placeholder:text-muted-foreground/60 focus:border-forest focus:outline-none focus:ring-2 focus:ring-ring/40",
);

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
      {message}
    </p>
  );
}

export function ReservationForm() {
  const [step, setStep] = useState<"details" | "review" | "confirmed">("details");
  const [values, setValues] = useState<ReservationValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationValues, string>>>({});
  const [reference, setReference] = useState("");
  const today = useMemo(todayISO, []);

  const set = (key: keyof ReservationValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const submitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) setStep("review");
  };

  const confirm = () => {
    setReference(makeReference());
    setStep("confirmed");
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setReference("");
    setStep("details");
  };

  /* ----------------------------- Confirmation ---------------------------- */
  if (step === "confirmed") {
    return (
      <div
        className="fade-up rounded-3xl border border-mint/40 bg-card p-8 text-center shadow-[0_20px_60px_-20px_rgba(15,45,30,0.3)] sm:p-12"
        role="status"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint/30">
          <CheckCircle2 className="h-9 w-9 text-forest" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
          Reservation Recorded in the Demo
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Thank you, {values.name.trim()}. Here is a summary of the reservation
          you built in this demonstration.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-mint-soft px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest/70">
            Demo reference number
          </p>
          <p className="mt-1 font-display text-2xl font-semibold tracking-wider text-forest">
            {reference}
          </p>
        </div>

        <dl className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 text-left text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">Name</dt>
            <dd className="font-medium">{values.name.trim()}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Phone</dt>
            <dd className="font-medium">{values.phone.replace(/[\s-]/g, "")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Date</dt>
            <dd className="font-medium">{formatDate(values.date)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Time</dt>
            <dd className="font-medium">{values.time}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Guests</dt>
            <dd className="font-medium">{values.guests}</dd>
          </div>
          {values.requests.trim() && (
            <div className="sm:col-span-2">
              <dt className="text-muted-foreground">Special requests</dt>
              <dd className="font-medium">{values.requests.trim()}</dd>
            </div>
          )}
        </dl>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-gold/50 bg-gold/10 px-6 py-5 text-left">
          <p className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
            <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-forest" aria-hidden="true" />
            <span>
              <strong>Demonstration only.</strong> This reservation has{" "}
              <strong>not</strong> been sent to Mint Leaves — no message has
              reached the restaurant, and nothing here is confirmed by its
              staff. Live bookings would require the owner's approval plus a
              backend or messaging integration.
            </span>
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            Make Another Reservation
          </button>
          <button
            type="button"
            onClick={() => setStep("review")}
            className="inline-flex items-center justify-center rounded-full border-2 border-forest px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-mint-soft"
          >
            Back to Review
          </button>
        </div>
      </div>
    );
  }

  /* -------------------------------- Review -------------------------------- */
  if (step === "review") {
    return (
      <div className="fade-up rounded-3xl border border-border bg-card p-8 shadow-[0_10px_40px_-16px_rgba(15,45,30,0.25)] sm:p-10">
        <h2 className="font-display text-3xl font-semibold">Review Your Reservation</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please check the details below before continuing.
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
          {[
            ["Name", values.name.trim()],
            ["Phone", values.phone.replace(/[\s-]/g, "")],
            ["Date", formatDate(values.date)],
            ["Preferred time", values.time],
            ["Guests", values.guests],
            ...(values.requests.trim()
              ? [["Special requests", values.requests.trim()] as [string, string]]
              : []),
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-mint-soft/60 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-forest/70">
                {label}
              </dt>
              <dd className="mt-1 font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-gold/10 px-4 py-3 text-xs leading-relaxed text-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
          <span>
            This is a front-end demonstration. Nothing is sent to the
            restaurant — confirmations require owner approval and a live
            booking integration.
          </span>
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setStep("details")}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-mint-soft"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Modify Details
          </button>
          <button
            type="button"
            onClick={confirm}
            className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    );
  }

  /* ------------------------------- Details -------------------------------- */
  return (
    <form
      onSubmit={submitDetails}
      noValidate
      className="rounded-3xl border border-border bg-card p-8 shadow-[0_10px_40px_-16px_rgba(15,45,30,0.25)] sm:p-10"
      aria-label="Table reservation form"
    >
      <h2 className="font-display text-3xl font-semibold">Book a Table</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill in your details — you'll get a chance to review everything before
        it's recorded in the demo.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="res-name" className="mb-1.5 block text-sm font-medium">
            Customer name <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="res-name"
            type="text"
            required
            autoComplete="name"
            maxLength={80}
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            className={inputClasses}
            placeholder="Your full name"
          />
          <FieldError message={errors.name} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-phone" className="mb-1.5 block text-sm font-medium">
            Phone number <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="res-phone"
            type="tel"
            inputMode="numeric"
            required
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            className={inputClasses}
            placeholder="10-digit mobile number"
          />
          <FieldError message={errors.phone} />
        </div>

        <div>
          <label htmlFor="res-date" className="mb-1.5 block text-sm font-medium">
            <CalendarDays className="mr-1 inline h-4 w-4" aria-hidden="true" />
            Reservation date <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="res-date"
            type="date"
            required
            min={today}
            value={values.date}
            onChange={set("date")}
            aria-invalid={!!errors.date}
            className={inputClasses}
          />
          <FieldError message={errors.date} />
        </div>

        <div>
          <label htmlFor="res-time" className="mb-1.5 block text-sm font-medium">
            <Clock className="mr-1 inline h-4 w-4" aria-hidden="true" />
            Preferred time <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id="res-time"
            required
            value={values.time}
            onChange={set("time")}
            aria-invalid={!!errors.time}
            className={inputClasses}
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <FieldError message={errors.time} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-guests" className="mb-1.5 block text-sm font-medium">
            <Users className="mr-1 inline h-4 w-4" aria-hidden="true" />
            Number of guests <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <select
            id="res-guests"
            required
            value={values.guests}
            onChange={set("guests")}
            aria-invalid={!!errors.guests}
            className={inputClasses}
          >
            <option value="">Select guests</option>
            {GUEST_OPTIONS.map((g) => (
              <option key={g} value={g}>
                {g} {g === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          <FieldError message={errors.guests} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-requests" className="mb-1.5 block text-sm font-medium">
            Special requests <span className="text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="res-requests"
            rows={3}
            maxLength={500}
            value={values.requests}
            onChange={set("requests")}
            className={cn(inputClasses, "resize-none")}
            placeholder="Window seat, birthday arrangement, dietary notes…"
          />
          <p className="mt-1.5 text-xs text-muted-foreground">
            {values.requests.length}/500 characters
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-forest-deep sm:w-auto sm:px-12"
      >
        Review Reservation
      </button>
    </form>
  );
}

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import {
  DISHES,
  MENU_FILTERS,
  MENU_NOTE,
  type Dish,
  type MenuFilterId,
} from "@/data/menu";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

function VegIndicator({ veg }: { veg: boolean }) {
  return (
    <span
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      className={cn(
        "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-2",
        veg ? "border-green-700" : "border-red-800",
      )}
    >
      <span
        className={cn("h-2 w-2 rounded-full", veg ? "bg-green-700" : "bg-red-800")}
      />
    </span>
  );
}

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  return (
    <Reveal delay={(index % 3) * 90} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[0_2px_12px_rgba(15,45,30,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-12px_rgba(15,45,30,0.28)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {dish.popular && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-deep shadow-sm">
              <Star className="h-3 w-3 fill-forest-deep" aria-hidden="true" />
              Popular
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold leading-snug">
              {dish.name}
            </h3>
            <VegIndicator veg={dish.veg} />
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {dish.description}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
            <span className="text-sm text-muted-foreground">
              {dish.category === "mains"
                ? "Main Course"
                : dish.category.charAt(0).toUpperCase() + dish.category.slice(1)}
            </span>
            <span className="font-display text-lg font-semibold text-forest">
              ₹{dish.price}
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

interface MenuSectionProps {
  items?: Dish[];
  showNote?: boolean;
  showViewAll?: boolean;
  className?: string;
}

/** Filterable menu grid with category pills. */
export function MenuSection({
  items = DISHES,
  showNote = true,
  showViewAll = false,
  className,
}: MenuSectionProps) {
  const [filter, setFilter] = useState<MenuFilterId>("all");

  const filtered = useMemo(() => {
    switch (filter) {
      case "all":
        return items;
      case "vegetarian":
        return items.filter((d) => d.veg);
      case "nonveg":
        return items.filter((d) => !d.veg);
      default:
        return items.filter((d) => d.category === filter);
    }
  }, [items, filter]);

  return (
    <div className={className}>
      <div
        className="flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="Menu categories"
      >
        {MENU_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              filter === f.id
                ? "border-forest bg-forest text-primary-foreground shadow-md"
                : "border-border bg-card text-foreground hover:border-forest hover:text-forest",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((dish, i) => (
          <DishCard key={dish.id} dish={dish} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No dishes in this category yet.
        </p>
      )}

      {showNote && (
        <p className="mx-auto mt-10 max-w-2xl rounded-xl bg-mint-soft px-5 py-4 text-center text-xs leading-relaxed text-forest">
          {MENU_NOTE}
        </p>
      )}

      {showViewAll && (
        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center rounded-full border-2 border-forest px-8 py-3 text-sm font-semibold text-forest transition-all duration-300 hover:bg-forest hover:text-primary-foreground"
          >
            View Full Menu
          </Link>
        </div>
      )}
    </div>
  );
}

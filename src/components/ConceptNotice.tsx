/**
 * Slim, tasteful disclaimer bar shown at the very top of every page so the
 * concept demo is never mistaken for the restaurant's official website.
 */
export function ConceptNotice() {
  return (
    <div
      role="note"
      className="bg-mint-soft text-center text-forest"
    >
      <p className="mx-auto max-w-6xl px-4 py-2 text-xs font-medium tracking-wide sm:px-6">
        Concept Website — Sample Content · Not the restaurant's official site.
        All dishes, prices, photos and details are placeholders pending owner
        confirmation.
      </p>
    </div>
  );
}

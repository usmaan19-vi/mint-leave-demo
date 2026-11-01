import type { CSSProperties } from "react";

interface LeafIconProps {
  className?: string;
  style?: CSSProperties;
}

/** Simple mint-leaf mark used in the Mint Leaves logo. */
export function LeafIcon({ className, style }: LeafIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M19.5 4.5c-7.5 0-13 3.5-13 10 0 2.6 1.4 4.8 3.4 5.9.5-2.9 2-6.1 5.1-8.9-2.2 2.7-3.6 5.9-3.9 9.3.9.4 1.9.7 3 .7 5 0 6.9-4.5 6.9-9 0-3-.6-5.8-1.5-8Z"
        fill="currentColor"
      />
      <path
        d="M4.5 20.5c0-4.5.9-8.2 3.2-11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

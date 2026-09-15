// Schematic corner brackets — the "blueprint / console" accent used on panels.
export default function CornerFrame({ className = "" }) {
  const base =
    "pointer-events-none absolute h-3.5 w-3.5 border-oncard-muted/60";
  return (
    <span className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span className={`${base} left-0 top-0 rounded-tl-md border-l-2 border-t-2`} />
      <span className={`${base} right-0 top-0 rounded-tr-md border-r-2 border-t-2`} />
      <span className={`${base} bottom-0 left-0 rounded-bl-md border-b-2 border-l-2`} />
      <span className={`${base} bottom-0 right-0 rounded-br-md border-b-2 border-r-2`} />
    </span>
  );
}

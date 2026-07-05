// Resolve an image path against Vite's base URL so links keep working
// regardless of where the site is hosted. External URLs are returned as-is.
export function asset(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  const clean = String(path).replace(/^(\.\.\/|\.\/|\/)+/, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}

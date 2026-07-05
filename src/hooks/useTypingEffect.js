import { useEffect, useState } from "react";

// Lightweight typewriter effect (replaces the old typed.js dependency).
export function useTypingEffect(words, { typeSpeed = 90, backSpeed = 40, backDelay = 1200 } = {}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    // Pause at the end of a fully typed word before deleting.
    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), backDelay);
      return () => clearTimeout(timeout);
    }

    // Move to the next word once fully deleted.
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? backSpeed : typeSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typeSpeed, backSpeed, backDelay]);

  return words.length ? words[index % words.length].substring(0, subIndex) : "";
}

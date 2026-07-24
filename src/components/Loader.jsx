import { useEffect, useState } from "react";

const FULL_TEXT = "Roselia Puspita Asri";
const TYPE_SPEED_MS = 55;
const HOLD_AFTER_TYPE_MS = 500;
const EXIT_DURATION_MS = 650;

export default function Loader({ onDone }) {
  const [typed, setTyped] = useState("");
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      onDone?.();
      return;
    }

    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(typeInterval);
        setTimeout(() => setExiting(true), HOLD_AFTER_TYPE_MS);
      }
    }, TYPE_SPEED_MS);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, EXIT_DURATION_MS);
    return () => clearTimeout(t);
  }, [exiting]);

  useEffect(() => {
    document.body.style.overflow = exiting || !visible ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [exiting, visible]);

  if (!visible) return null;

  const progress = Math.round((typed.length / FULL_TEXT.length) * 100);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[999] bg-ink flex flex-col items-center justify-center gap-6 transition-all duration-700 ease-in-out ${
        exiting ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="font-type text-[11px] uppercase tracking-widest text-highlighter">
        Edisi 2026
      </span>

      <h2 className="font-display font-extrabold text-2xl md:text-4xl text-newsprint uppercase tracking-tight text-center px-6">
        {typed}
        <span className="inline-block w-[2px] md:w-[3px] h-[0.9em] bg-press-red ml-1 align-middle motion-safe:animate-pulse" />
      </h2>

      <div className="w-48 md:w-64 h-[3px] bg-newsprint/15 overflow-hidden">
        <div
          className="h-full bg-press-red"
          style={{ width: `${progress}%`, transition: `width ${TYPE_SPEED_MS}ms linear` }}
        />
      </div>

      <span className="font-type text-[10px] uppercase tracking-widest text-newsprint/40">
        Menyiapkan edisi…
      </span>
    </div>
  );
}
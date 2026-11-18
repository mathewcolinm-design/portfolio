import { useEffect, useState } from "react";
import { profile } from "../data/content";

/** Copies the email address on click; falls back to opening the mail app. */
export function CopyEmail({ className = "", label }: { className?: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button type="button" onClick={onClick} className={className}>
      <span aria-live="polite">{copied ? "Copied to clipboard" : (label ?? profile.email)}</span>
    </button>
  );
}

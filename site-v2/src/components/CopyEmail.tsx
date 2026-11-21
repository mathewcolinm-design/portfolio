import { Check } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { profile } from "../data/content";

/**
 * Copies the email address. If the clipboard is unavailable it opens the
 * mail app instead, so the button always does something useful.
 */
export function CopyEmail({ className = "", children }: { className?: string; children?: ReactNode }) {
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
    <button type="button" onClick={onClick} className={className} title={`Copy ${profile.email}`}>
      <span aria-live="polite" className="inline-flex items-center gap-1.5">
        {copied ? (
          <>
            <Check size={16} strokeWidth={1.5} aria-hidden="true" /> Email copied
          </>
        ) : (
          (children ?? profile.email)
        )}
      </span>
    </button>
  );
}

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { CopyEmail } from "../components/CopyEmail";
import { Note, Section, Statement, solidButton } from "../components/ui";
import { profile } from "../data/content";

const field =
  "mt-2 block w-full rounded-[10px] bg-field px-4 py-3 text-base text-fg outline-none ring-1 ring-transparent transition-[box-shadow] duration-300 focus:ring-fg";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // No server: the form drafts an email in the visitor's own mail app.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Hello from ${name}${company ? ` (${company})` : ""}`;
    const body = `${message}\n\n${name}${company ? `, ${company}` : ""}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main id="main">
      <Section divider={false}>
        <div className="pt-4 md:pt-8">
          <Note>{profile.availability}</Note>
          <div className="mt-4">
            <Statement as="h1" ink="Hiring a product designer?" soft=" Let’s talk." />
          </div>
        </div>
      </Section>

      <Section id="reach" title="Reach me" sub="Email or LinkedIn">
        <ul className="border-t border-line">
          <li className="flex items-baseline justify-between gap-6 border-b border-line py-4 text-base">
            <span className="text-muted">Email</span>
            <CopyEmail className="text-right transition-colors hover:text-muted" />
          </li>
          <li className="flex items-baseline justify-between gap-6 border-b border-line py-4 text-base">
            <span className="text-muted">LinkedIn</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-muted"
            >
              linkedin.com/in/mathew-colin <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
        </ul>
        <p className="mt-3 text-[15px] text-muted">Click the address to copy it.</p>
      </Section>

      <Section id="message" title="Send a message" sub="It opens in your email app">
        <form onSubmit={onSubmit} className="space-y-5">
          <label className="block text-base">
            Full name
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" className={field} />
          </label>
          <label className="block text-base">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              className={field}
            />
          </label>
          <label className="block text-base">
            Company <span className="text-muted">(optional)</span>
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Where you work" autoComplete="organization" className={field} />
          </label>
          <label className="block text-base">
            Message
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the role or project"
              className={`${field} resize-y`}
            />
          </label>
          <button type="submit" className={solidButton}>
            Write the email
          </button>
          <p className="text-[15px] text-muted">
            This opens your email app with your message filled in, addressed to {profile.email}.
          </p>
        </form>
      </Section>
    </main>
  );
}

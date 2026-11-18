import { Link } from "react-router";

export function NotFound() {
  return (
    <main id="main" data-section-theme="dark" className="grid min-h-[100svh] place-items-center px-4">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">404</p>
        <h1 className="mt-4 text-5xl font-medium tracking-tight">This page doesn’t exist.</h1>
        <Link to="/" className="mt-8 inline-block rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg">
          Back home
        </Link>
      </div>
    </main>
  );
}

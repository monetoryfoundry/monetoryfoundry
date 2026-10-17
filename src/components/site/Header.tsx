"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-[4.25rem] items-center justify-between">
        <Wordmark />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-strong transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-accent px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent-hover"
          >
            Contact us
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-md border border-border bg-surface p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-white md:hidden"
          aria-label="Mobile"
        >
          <ul className="container-page py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-border/70 py-3.5 text-sm font-medium text-muted-strong"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/contact"
                className="inline-flex rounded-md bg-accent px-3.5 py-2 text-sm font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

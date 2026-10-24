"use client";

import { useState } from "react";
import { company, navigation } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          href="#top"
          className="logo"
          onClick={() => setOpen(false)}
        >
          <img src="/favicon.svg" alt="" width={28} height={28} />
          <span>Monetary</span> Foundry
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
        <nav
          id="primary-nav"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={`mailto:${company.email}`}
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { company, contact, navigation } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Wordmark />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {company.heroSupport}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Company
          </p>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-strong transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-strong">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© 2026 Monetary Foundry</p>
          <p>
            Founded {company.founded} · {company.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

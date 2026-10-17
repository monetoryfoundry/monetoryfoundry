import type { Metadata } from "next";
import { Button } from "@/components/site/Button";
import { PageHeader } from "@/components/site/PageHeader";
import { company, contact, metadataContent } from "@/content/site";

export const metadata: Metadata = {
  title: metadataContent.contactTitle,
  description: metadataContent.contactDescription,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build together"
        description="Product discussions, protocol engineering, partnerships, and hiring."
      />

      <section>
        <div className="container-page grid gap-8 py-16 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Email
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-2xl font-bold tracking-[-0.02em] text-foreground transition-opacity hover:opacity-70"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Office
              </p>
              <p className="mt-2 text-lg font-semibold">{contact.address}</p>
              <p className="mt-1 text-sm text-muted">Founded {company.founded}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Social
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${contact.email}`}>Send email</Button>
              <Button href="/careers" variant="secondary">
                Careers
              </Button>
            </div>
          </div>

          <div className="soft-card p-8">
            <h2 className="text-xl font-bold tracking-[-0.02em]">What to include</h2>
            <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-muted-strong">
              <li>Your name and organization</li>
              <li>Whether this is about products, partnership, or hiring</li>
              <li>Relevant links (GitHub, LinkedIn, protocol docs)</li>
              <li>Any timing constraints we should know</li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Protocol engineering applicants should lead with production smart-contract
              work and architecture ownership. Partnership notes should include the
              problem space and desired outcome.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

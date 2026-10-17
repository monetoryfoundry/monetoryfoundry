import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/site/Button";
import { PageHeader } from "@/components/site/PageHeader";
import { careersIntro, contact, openPositions } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return openPositions.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = openPositions.find((item) => item.slug === slug);
  if (!role) return {};
  return { title: role.title, description: role.summary };
}

export default async function CareerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const role = openPositions.find((item) => item.slug === slug);
  if (!role) notFound();

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(`Application: ${role.title}`)}`;

  return (
    <>
      <PageHeader
        eyebrow={role.team}
        title={role.title}
        description={role.summary}
        actions={
          <>
            <Button href={mailto}>Apply by email</Button>
            <Button href="/careers" variant="secondary">
              All roles
            </Button>
          </>
        }
      />

      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Type
            </p>
            <p className="mt-2 font-semibold">{role.type}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Team
            </p>
            <p className="mt-2 font-semibold">{role.team}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Location
            </p>
            <p className="mt-2 font-semibold">{role.locations}</p>
          </div>
        </div>
        <div className="container-page pb-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            {careersIntro.regions}
          </p>
        </div>
      </section>

      <section>
        <div className="container-page grid gap-8 py-16 lg:grid-cols-2">
          <div className="soft-card p-7">
            <h2 className="text-xl font-bold">Responsibilities</h2>
            <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-muted-strong">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="soft-card p-7">
            <h2 className="text-xl font-bold">Requirements</h2>
            <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-muted-strong">
              {role.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container-page pb-16">
          <p className="max-w-3xl text-sm text-muted">
            Send a short note with relevant work, GitHub or LinkedIn, and protocol
            experience to{" "}
            <a href={mailto} className="font-medium text-foreground underline-offset-2 hover:underline">
              {contact.email}
            </a>
            . We review technical evidence first.
          </p>
        </div>
      </section>
    </>
  );
}

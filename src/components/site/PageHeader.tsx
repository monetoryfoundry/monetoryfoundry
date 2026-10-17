import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="border-b border-border">
      <div className="container-page py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] text-foreground sm:text-5xl animate-fade-up">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg animate-fade-up animate-delay-1">
            {description}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animate-delay-2">
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  );
}

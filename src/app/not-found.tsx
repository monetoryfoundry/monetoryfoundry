import { Button } from "@/components/site/Button";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em]">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted">
        That route does not exist. Return home or browse careers.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href="/careers" variant="secondary">
          Careers
        </Button>
      </div>
    </div>
  );
}

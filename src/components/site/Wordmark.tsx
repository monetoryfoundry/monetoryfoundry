import Image from "next/image";
import Link from "next/link";

export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Monetary Foundry"
      width={120}
      height={120}
      className={`shrink-0 object-contain ${className}`}
      priority
      unoptimized
    />
  );
}

export function Wordmark({ href = "/" }: { href?: string }) {
  const content = (
    <span className="inline-flex items-center gap-2.5 text-foreground">
      <Mark className="h-10 w-10" />
      <span className="text-[15px] font-bold tracking-[-0.02em]">
        Monetary Foundry
      </span>
    </span>
  );
  return href ? (
    <Link href={href} className="transition-opacity duration-200 hover:opacity-75">
      {content}
    </Link>
  ) : (
    content
  );
}

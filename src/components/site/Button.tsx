import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 ease-out";
  const variants = {
    primary:
      "bg-[#ffb800] text-[#111318] hover:bg-[#f0a800] hover:-translate-y-px",
    secondary:
      "border border-border-strong bg-surface text-foreground hover:bg-white hover:border-foreground/25",
    ghost: "text-muted-strong hover:text-foreground",
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  const external =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

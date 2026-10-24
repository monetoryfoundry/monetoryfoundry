import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="section-label">404</p>
      <h1>This page is not on the map.</h1>
      <p>That route does not exist. The company site is on the home page.</p>
      <Link className="btn-primary" href="/">
        Back home
      </Link>
    </section>
  );
}

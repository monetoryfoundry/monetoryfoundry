import { company } from "@/content/site";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-copy">
          © {company.year} Monetary Foundry. All rights reserved.
        </p>
        <div className="footer-links">
          <a href={company.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${company.email}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

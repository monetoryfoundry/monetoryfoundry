import Image from "next/image";
import { partners } from "@/content/site";

export function PartnerLogos() {
  return (
    <div className="partner-grid">
      {partners.map((partner) => (
        <div key={partner.name} className="partner-cell">
          <Image
            src={partner.logo}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded object-contain"
          />
          <span className="text-sm font-medium text-muted-strong">{partner.name}</span>
        </div>
      ))}
    </div>
  );
}

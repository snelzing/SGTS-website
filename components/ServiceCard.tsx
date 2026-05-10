import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card">
      <span className="service-icon">{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </Link>
  );
}

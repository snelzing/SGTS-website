import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <article className="service-detail">
      <Link href="/" className="back-link">&larr; Back to Home</Link>
      <span className="service-icon-large">{service.icon}</span>
      <h1>{service.title}</h1>
      <p className="service-description">{service.description}</p>
      <p className="placeholder-text">
        [Service details go here &mdash; describe what this service includes,
        pricing, turnaround time, and any special offers.]
      </p>
    </article>
  );
}

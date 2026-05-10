import ServiceCard from "@/components/ServiceCard";
import Accomplishments from "@/components/Accomplishments";
import ContactForm from "@/components/ContactForm";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-icon">💻</span>
          <h1>Scooter Girl's Tech Support</h1>
          <span className="hero-icon">🛴</span>
        </div>
        <p className="tagline">
          Finally! Tech Support for Everyone Else<br />
          So you can focus on what you are good at.
        </p>
      </section>

      <section className="services">
        <h2>My Services</h2>
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <Accomplishments />

      <ContactForm />
    </>
  );
}

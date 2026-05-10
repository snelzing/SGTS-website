import { accomplishments } from "@/data/services";

export default function Accomplishments() {
  return (
    <section className="accomplishments">
      <h2>By the Numbers</h2>
      <div className="stats-grid">
        {accomplishments.map((item) => (
          <div key={item.title} className="stat">
            <span className="stat-value">{item.value}</span>
            <span className="stat-title">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

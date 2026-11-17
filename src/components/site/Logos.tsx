const marks = ["TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "Next.js"];

const Logos = () => (
  <section id="stack" aria-labelledby="stack-title" className="bg-[var(--surface)] mt-8">
    <div className="wrap band text-center">
      <h2 id="stack-title" className="label">The tools I reach for every day</h2>
      <ul className="list-none m-0 mt-8 p-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
        {marks.map((m) => (
          <li key={m} className="text-[22px] leading-none font-semibold tracking-tight text-[var(--text)] whitespace-nowrap">{m}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Logos;

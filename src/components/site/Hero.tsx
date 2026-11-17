const Hero = () => (
  <section aria-labelledby="hero-title">
    <div className="wrap pt-[var(--band-top)] pb-12 md:pb-16 text-center flex flex-col items-center">
      <h1 id="hero-title" className="display max-w-[16ch]" style={{ fontSize: "calc(var(--display) * 1.35)" }}>
        Full Stack &amp; AI Systems Engineer
      </h1>
      <p className="lede mt-6 max-w-[44ch]">
        I build retrieval-augmented generation systems, self-hosted cloud platforms and real-time infrastructure.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#contact" className="btn btn-primary">Contact me</a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
      </div>
      <p className="mt-8 text-[14px] text-[var(--text-3)]">
        Open to freelance and full-time roles · Building Salesient and Zyotra
      </p>
    </div>
    <img
      src="/hero-illustration.jpg"
      alt="Illustration of servers, cloud storage and a database joined by network lines"
      width={1376}
      height={768}
      fetchPriority="high"
      className="block w-full h-[240px] md:h-[420px] object-cover object-[50%_48%] bg-[var(--surface)]"
    />
  </section>
);

export default Hero;

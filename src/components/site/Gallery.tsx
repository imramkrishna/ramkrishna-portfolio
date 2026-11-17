const items = [
  { src: "/chess.png", title: "ChessOnline", note: "Real-time multiplayer over WebSockets", h: "h-[360px] md:h-[520px]" },
  { src: "/medcrm.png", title: "MedCRM", note: "Customer management for clinics", h: "h-[260px] md:h-[380px]" },
  { src: "/thready.png", title: "Thready", note: "Threaded conversations", h: "h-[300px] md:h-[440px]" },
  { src: "/wms.png", title: "WMS", note: "Warehouse management system", h: "h-[320px] md:h-[300px]" },
];

const Gallery = () => (
  <section id="work" aria-labelledby="work-title" className="band">
    <div className="wrap">
      <h2 id="work-title" className="display max-w-[18ch]">Selected work</h2>
      <p className="lede mt-4 max-w-[48ch]">Interfaces from systems I have designed and built end to end.</p>
    </div>
    <ul className="list-none m-0 mt-12 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-end">
      {items.map((it) => (
        <li key={it.title}>
          <figure className="m-0">
            <img
              src={it.src}
              alt={`${it.title} interface screenshot`}
              loading="lazy"
              className={`block w-full ${it.h} object-cover object-left-top bg-[var(--surface)] rounded-none`}
            />
            <figcaption className="wrap !px-4 py-3">
              <span className="block font-medium">{it.title}</span>
              <span className="block text-[14px] text-[var(--text-3)]">{it.note}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </section>
);

export default Gallery;

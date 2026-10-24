const Ticker = ({ text }: { text: string }) => (
  <div
    role="note"
    className="rd-ticker-bar border-2 border-black bg-[var(--rd-magenta)] px-4 py-3 shadow-[var(--rd-shadow)] flex items-center justify-center gap-4 sm:gap-8"
  >
    <span
      aria-hidden="true"
      className="retro-ticker-arrow hidden sm:block text-3xl leading-none tracking-[-.15em]"
    >
      ▶▶▶
    </span>
    <p className="bg-white border border-black px-4 py-1.5 text-center font-semibold text-base sm:text-xl shadow-[2px_2px_0_#000]">
      {text}
    </p>
    <span
      aria-hidden="true"
      className="retro-ticker-arrow-rev hidden sm:block text-3xl leading-none tracking-[-.15em]"
    >
      ◀◀◀
    </span>
  </div>
);

export default Ticker;

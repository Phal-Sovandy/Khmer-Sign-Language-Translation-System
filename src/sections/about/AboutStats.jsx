export default function AboutStats() {
  return (
    <section className="relative w-full py-14 px-6">
      <div className="relative z-10 px-8 flex w-full flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between max-w-[1700px] mx-auto">
        {/* Stats */}
        <div className="flex flex-wrap items-center gap-15 lg:gap-40 justify-center">
          <div className="flex flex-col items-start text-center">
            <span className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg font-heading">
              87.99 <span className="text-brand-primary">%</span>
            </span>
            <span className="mt-2 text-white/60 tracking-wide text-left font-sans">
              Accuracy
            </span>
          </div>
          <div className="flex flex-col items-start text-center">
            <span className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg font-heading">
              &lt;  1<span className="text-brand-primary">s</span>
            </span>
            <span className="mt-2 text-white/60 tracking-wide font-sans">
              Processing Speed
            </span>
          </div>
          <div className="flex flex-col items-start text-center">
            <span className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg font-heading">
              38 <span className="text-brand-primary"></span>
            </span>
            <span className="mt-2 text-white/60 tracking-wide font-sans">
              Supported Khmer Sign
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="lg:max-w-[30%] text-lg leading-relaxed text-white/60 text-center lg:text-left font-sans">
          Bridging silence and conversation, our system turns Khmer sign
          language into accurate, real-time text, making communication
          effortless, natural, and inclusive for everyone.
        </p>
      </div>
    </section>
  );
}

import appInterfaceImg from "../../assets/images/misc/demo.webp";
import MediaWrapper from "../../components/ui/MediaWrapper";

export default function InterfaceShowcase() {
  return (
    <section className="relative w-screen py-32 bg-brand-background overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-primary/10 blur-[150px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-16 px-8 max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center max-w-8xl">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <rect width="22" height="15" x="1" y="3" rx="3" />
                <path d="M8 21h8M1 13h22" />
              </g>
            </svg>
          </div>

          {/* Title */}
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white">
            Accessible & User-Friendly Design
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-white/60 font-sans leading-relaxed">
            Features an intuitive interface with easy-to-navigate controls,
            making the Khmer sign language translation system simple to use for
            everyone, including beginners and non-technical users.
          </p>
        </div>

        {/* App Interface Screenshot */}
        <div className="relative w-full max-w-7xl">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 via-transparent to-transparent rounded-3xl blur-2xl scale-105" />

          {/* Browser frame */}
          <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#2a2a2a] rounded-lg px-4 py-1.5 text-xs text-gray-400 font-sans">
                  kslts.app
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Screenshot */}
            <MediaWrapper
              src={appInterfaceImg}
              alt="KSLTS Application Interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

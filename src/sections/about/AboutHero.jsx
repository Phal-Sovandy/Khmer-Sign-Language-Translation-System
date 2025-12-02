import MediaWrapper from "../../components/ui/MediaWrapper";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Left hand image */}
      <div className="lg:z-10 absolute left-0 top-40 w-[350px] lg:w-[600px] opacity-70 pointer-events-none -translate-x-4">
        <MediaWrapper
          src="/src/assets/images/signs/point-sign.webp"
          fetchPriority="high"
          eager={true}
          alt=""
          className="w-full h-auto object-contain"
          style={{
            filter: "grayscale(100%) contrast(1.1) brightness(1.1)",
          }}
        />
      </div>

      {/* Right hand image */}
      <div className="absolute right-0 top-24 w-[350px] lg:w-[600px] opacity-70 pointer-events-none translate-x-4">
        <MediaWrapper
          src="/src/assets/images/signs/peace-sign.webp"
          fetchPriority="high"
          eager={true}
          alt=""
          className="w-full h-auto object-contain"
          style={{ filter: "grayscale(100%) contrast(1.1) brightness(1.1)" }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1700px] mx-auto px-8">
        {/* Title */}
        <h1 className="text-left mb-12">
          <span className="block font-heading font-medium text-[clamp(3.5rem,8vw,7rem)] text-white/90 leading-tight">
            Together,
          </span>
          <span className="block font-heading font-medium text-[clamp(3.5rem,8vw,7rem)] leading-tight">
            <span className="text-white/90">We Communicate </span>
            <span className="bg-linear-to-r from-[#C9A227] via-[#E8D48B] to-[#C9A227] bg-clip-text text-transparent">
              Better
            </span>
          </span>
        </h1>

        {/* Video/Image */}
        <div className="max-w-[1300px] mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              src="/src/assets/videos/about-cover.mp4"
              preload="auto"
              poster="/src/assets/images/about-cover.webp"
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

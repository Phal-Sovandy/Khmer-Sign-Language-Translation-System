import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import { heroStats } from "../../config";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid w-full flex-1 items-center gap-8 px-4 py-8 sm:gap-12 sm:px-6 sm:py-12 md:gap-16 md:px-8 md:py-16 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[1.2fr_1fr] lg:gap-0 lg:px-12 lg:py-20"
    >
      <div className="w-full max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
        <HeroContent />
      </div>
      <HeroVisual stats={heroStats} />
    </section>
  );
}

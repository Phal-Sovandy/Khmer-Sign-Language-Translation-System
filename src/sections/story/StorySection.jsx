import handReach from "../../assets/images/misc/hand.webp";
import MediaWrapper from "../../components/ui/MediaWrapper";

const copy =
  "From silent gestures to clear communication, our system transforms sign language into readable, understandable text — powered by AI and vision tech. No learning curve. No delay. Just understanding.";

export default function StorySection() {
  return (
    <section className="w-full py-16 text-center text-white lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4">
        <div className="space-y-4">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white leading-tight">
            Let your hands tell their story.
          </h2>
          <p className="text-white/60 font-sans leading-relaxed">{copy}</p>
        </div>

        <div className="relative w-full max-w-3xl overflow-visible rounded-[40px]">
          <div className="absolute inset-8 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.3),transparent_70%)] blur-3xl"></div>
          <MediaWrapper
            src={handReach}
            alt="Hand demonstrating sign language"
            className="relative md:left-[50px] z-10 mx-auto w-full max-w-2xl object-contain"
          />
        </div>

        {/* Radial gradient line */}
        <div className="relative z-10 w-[70%] top-[-40px] h-px bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)]"></div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import MediaWrapper from "../../components/ui/MediaWrapper";

// Story item component with scroll animation
function StoryItem({ story }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-50 ${
        story.imagePosition === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`w-full lg:w-1/2 transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0"
            : story.imagePosition === "left"
            ? "opacity-0 -translate-x-16"
            : "opacity-0 translate-x-16"
        }`}
      >
        <div className="rounded-lg overflow-hidden">
          <MediaWrapper
            src={story.image}
            alt={story.title}
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>

      {/* Dot on timeline */}
      <div
        className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/40 rounded-full ring-4 ring-brand-background transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />

      {/* Content */}
      <div
        className={`w-full lg:w-1/2 transition-all duration-700 ease-out delay-200 ${
          story.imagePosition === "right" ? "lg:text-left" : "lg:text-right"
        } ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="font-heading text-xl font-semibold text-white mb-3">
          {story.title}
        </h3>
        <p className="text-white/60 font-sans leading-relaxed">
          {story.description}
        </p>
      </div>
    </div>
  );
}

const stories = [
  {
    title: "The Problem",
    description:
      "Communication should never be a barrier — yet for many people in the Deaf and speech-impaired community, daily conversations can feel isolating, limited, and exhausting. We saw firsthand how a lack of accessible communication tools creates unfair gaps in education, work, and social life.",
    image: "/src/assets/images/story/story-1.webp",
    imagePosition: "left",
  },
  {
    title: "The Spark",
    description:
      "Our journey began with a simple question: What if technology could listen with its eyes? We believed that with the right tools, gesture and expression could become just as powerful as spoken words.",
    image: "/src/assets/images/story/story-2.webp",
    imagePosition: "right",
  },
  {
    title: "The Solution",
    description:
      "That belief led us to build a Khmer sign language translation system that converts gestures into readable text and speech — making communication faster, clearer, and more human.",
    image: "/src/assets/images/story/story-3.webp",
    imagePosition: "left",
  },
  {
    title: "The People",
    description:
      "We build for students trying to learn, workers trying to connect, families trying to understand, and a community that deserves to be heard — without boundaries.",
    image: "/src/assets/images/story/story-4.webp",
    imagePosition: "right",
  },
  {
    title: "The Growth",
    description:
      "What began as a small idea has grown into a meaningful project driven by learning, testing, and listening to real users.",
    image: "/src/assets/images/story/story-5.webp",
    imagePosition: "left",
  },
  {
    title: "The Vision",
    description:
      "Our goal is simple: a future where language never divides — and technology brings people closer instead of further apart.",
    image: "/src/assets/images/story/story-6.webp",
    imagePosition: "right",
  },
];

export default function OurStorySection() {
  return (
    <section className="py-24">
      <div className="max-w-[1700px] mx-auto px-8">
        {/* Title */}
        <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white text-center mb-20">
          Our Story
        </h2>

        {/* Timeline */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Vertical dashed line with radial gradient */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 16px)",
              maskImage:
                "radial-gradient(ellipse at center, white 0%, white 30%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, white 0%, white 30%, transparent 70%)",
            }}
          />

          {/* Story items */}
          <div className="space-y-16 lg:space-y-24">
            {stories.map((story, index) => (
              <StoryItem key={index} story={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

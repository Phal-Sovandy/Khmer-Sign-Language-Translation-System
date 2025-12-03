import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  AboutHero,
  QuoteSection,
  AboutStats,
  MissionSection,
  OurStorySection,
  ImpactStatement,
  TeamSection,
  VoicesSection,
  JoinCommunitySection,
} from "../sections/about";
import { SEO } from "../components/seo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-background overflow-x-clip">
      <SEO
        title="About"
        url="/about"
        keywords="about KSLTS, sign language project, team members, mission statement, accessibility project, Cambodia sign language, deaf community support, capstone project, data science project, computer vision project"
      />
      {/* Header */}
      <Header showDemoButton={false} />

      {/* Main Content */}
      <main>
        {/* Hero section wrapper with gradient background */}
        <div className="relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-linear-to-t from-[#737373]/25 to-[#FFFFFF]/0 pointer-events-none" />

          {/* Subtle glow accent */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 bottom-0 h-60 w-[800px] -translate-x-1/2 rounded-full bg-[#737373]/10 blur-3xl" />
          </div>

          <AboutHero />
          <QuoteSection />
          <AboutStats />
        </div>

        <MissionSection />
        <OurStorySection />
        <ImpactStatement />
        <TeamSection />
        <VoicesSection />
        <JoinCommunitySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import Header from "./components/layout/Header";
import HeroSection from "./sections/hero/HeroSection.jsx";
import StorySection from "./sections/story";
import MotionSection from "./sections/motion";
import StatsSection from "./sections/stats";
import BackgroundGrid from "./components/visuals/BackgroundGrid";
import FeatureShowcase from "./sections/feature";
import InterfaceShowcase from "./sections/interface";
import WorkflowSection from "./sections/workflow";
import TryDemoSection from "./sections/demo";
import FeedbackSection from "./sections/feedback";
import ContactSection from "./sections/contact";
import FAQSection from "./sections/faq";
import Footer from "./components/layout/Footer";
import { SEO } from "./components/seo";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-background text-white">
      <SEO
        url="/"
        keywords="sign language, Khmer sign language, gesture recognition, AI translation, accessibility, real-time translation, computer vision, machine learning, Cambodia, deaf community, KSLTS, sign language translator, webcam translation, text-to-speech, assistive technology"
      />
      <BackgroundGrid />
      <Header showDemoButton={true} />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[95vw] flex-col px-6 pb-16 pt-20 lg:px-20">
        <div className="flex w-full flex-1 flex-col gap-24 pb-24">
          <HeroSection />
          <StorySection />
        </div>
      </div>
      <div className="relative -mt-24">
        {/* Gradient overlay to blend MotionSection with background */}
        <div className="absolute inset-x-0 top-0 z-30 pointer-events-none">
          <div className="h-68 bg-linear-to-b from-brand-background via-brand-background/90 to-brand-background/0"></div>
          {/* <div className="h-64 -mt-24 bg-linear-to-b from-brand-background/40 via-brand-background/15 to-transparent"></div> */}
        </div>
        <MotionSection />
      </div>
      <StatsSection />
      <FeatureShowcase />
      <InterfaceShowcase />
      <WorkflowSection />
      <TryDemoSection />
      <FeedbackSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

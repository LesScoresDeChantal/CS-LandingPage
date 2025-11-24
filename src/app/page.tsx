import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { WhySection } from "@/components/landing/WhySection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AnalysisTable } from "@/components/landing/AnalysisTable";
import { SocialProof } from "@/components/landing/SocialProof";
import { EducationSection } from "@/components/landing/EducationSection";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <WhySection />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <AnalysisTable />
      <SocialProof />
      <EducationSection />
      <div id="pricing">
        <Pricing />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
}

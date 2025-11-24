import {
  Header,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  AnalysisCategoriesSection,
  TestimonialsSection,
  MomentsSection,
  EducationSection,
  PricingSection,
  FAQSection,
  CTASection,
  Footer,
} from "./_components";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AnalysisCategoriesSection />
      <TestimonialsSection />
      <MomentsSection />
      <EducationSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

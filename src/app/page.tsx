import {
  AnimatedParticles,
  Header,
  HeroSection,
  FeaturesSection,
  AppPreviewSection,
  DataProvidersSection,
  AnalysisCategoriesSection,
  TestimonialsSection,
  MomentsSection,
  EducationSection,
  PricingSection,
  FAQSection,
  Footer,
} from "./_components";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Animated particles background */}
      <AnimatedParticles />

      <Header />
      <HeroSection />
      <FeaturesSection />
      <AppPreviewSection />
      <DataProvidersSection />
      <AnalysisCategoriesSection />
      <TestimonialsSection />
      <MomentsSection />
      <EducationSection />
      <PricingSection className="py-24" />
      <FAQSection />
      <Footer />
    </div>
  );
}

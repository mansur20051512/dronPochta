import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { StatsSection } from "@/components/stats-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TechSpecsSection } from "@/components/tech-specs-section"
import { InteractiveMapSection } from "@/components/interactive-map-section"
import { CostCalculator } from "@/components/cost-calculator"
import { TestimonialsSection } from "@/components/testimonials-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ProspectsSection } from "@/components/prospects-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <AdvantagesSection />
      <InteractiveMapSection />
      <TechSpecsSection />
      <CostCalculator />
      <UseCasesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <ProspectsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

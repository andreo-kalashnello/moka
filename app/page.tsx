import { AboutSection } from "@/components/AboutSection";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoStrip } from "@/components/InfoStrip";
import { MenuSection } from "@/components/MenuSection";
import { Reveal } from "@/components/Reveal";
import { RequestModalProvider } from "@/components/RequestModalProvider";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ServicesSection } from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <RequestModalProvider>
      <Header />
      <main>
        <Hero />
        <InfoStrip />
        <MenuSection />
        <ServicesSection />
        <Reveal>
          <div className="about-reviews-wrap">
            <AboutSection />
            <ReviewsSection />
          </div>
        </Reveal>
        <BookingCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </RequestModalProvider>
  );
}

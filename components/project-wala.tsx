"use client"
import Header from "./header"
import HeroSection from "./hero-section"
import ServicesSection from "./services-section"
import ProjectShowcase from "./project-showcase"
import CustomProjectForm from "./custom-project-form"
import CommunicationSection from "./communication-section"
import ReviewsSection from "./reviews-section"
import ContactSection from "./contact-section"
import FaqSection from "./faq-section"
import Footer from "./footer"
import FloatingWhatsApp from "./floating-whatsapp"

export default function ProjectWala() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectShowcase />
      <CustomProjectForm />
      <CommunicationSection />
      <ReviewsSection />
      <ContactSection />
      <FaqSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus Marketing | Premium Car Dealership",
  description: "Find your dream car at Plus Marketing. New and pre-owned vehicles with financing options and premium service.",
  keywords: "car dealership, auto sales, vehicle financing, car service, automotive",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
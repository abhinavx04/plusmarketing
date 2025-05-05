"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/ServiceCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Car, CreditCard, Wrench } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: <Car className="h-10 w-10" />,
      title: "Car Sales",
      description: "Explore our extensive collection of new and pre-owned vehicles, carefully selected to meet the highest standards of quality and performance.",
      features: ["New vehicles", "Certified pre-owned", "Trade-ins", "Test drives"],
      link: "/services"
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Financing Options",
      description: "Find flexible financing solutions tailored to your budget with competitive rates and terms through our network of trusted lending partners.",
      features: ["Competitive rates", "Leasing options", "Quick approvals", "Trade-in value"],
      link: "/services"
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Vehicle Servicing",
      description: "Keep your vehicle in optimal condition with our comprehensive maintenance and repair services performed by certified technicians.",
      features: ["Scheduled maintenance", "Repair services", "Genuine parts", "Extended warranties"],
      link: "/services"
    }
  ];

  return (
    <SectionWrapper id="services" className="bg-muted relative overflow-hidden">
      {/* Add yellow gradient background effect */}
      <div className="absolute inset-0 yellow-gradient opacity-30" />
      
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            At Plus Marketing, we offer comprehensive automotive solutions to meet all your vehicle needs, from finding your dream car to maintaining it in peak condition.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "transition-all duration-1000 ease-out hover:yellow-glow",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                isInView ? `delay-[${index * 200}ms]` : ""
              )}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
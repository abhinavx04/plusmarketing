"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setLoaded(true);

    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;

    if (heading && subHeading) {
      gsap.from(heading, {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        onComplete: () => {
          heading.style.opacity = "1";
        }
      });

      gsap.from(subHeading, {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5,
        onComplete: () => {
          subHeading.style.opacity = "1";
        }
      });
    }
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-start pt-32 md:pt-40">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury car showroom"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div 
          className={cn(
            "max-w-3xl text-white transition-all duration-1000 ease-in-out space-y-16",
            loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          <div className="space-y-20">
            <h1 
              ref={headingRef}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mt-8"
            >
              Discover Your Perfect Vehicle
            </h1>
            <p 
              ref={subHeadingRef}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
            >
              Your journey to finding the ideal car starts here. Experience excellence in automotive retail with Plus Marketing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-4">
            <Button 
              onClick={() => scrollToElement('contact')}
              size="lg" 
              className="text-base bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-semibold"
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => scrollToElement('services')}
              size="lg" 
              variant="outline" 
              className="text-base text-white border-2 border-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Explore Vehicles
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce cursor-pointer"
        onClick={() => scrollToElement('about')}
      >
        <ChevronDown className="h-8 w-8 text-white opacity-80" />
      </div>
    </section>
  );
}
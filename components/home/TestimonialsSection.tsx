"use client";

import { useRef, useState } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajiv Sharma",
      position: "Business Owner",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      content: "I've purchased three vehicles from Plus Marketing over the years, and each experience has been exceptional. Their team is knowledgeable, professional, and genuinely interested in finding the right car for your needs."
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Software Engineer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      content: "The financing process at Plus Marketing was seamless. They worked with me to find a payment plan that fit my budget and explained every detail clearly. Couldn't be happier with my new car!"
    },
    {
      id: 3,
      name: "Anil Kumar",
      position: "Doctor",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      content: "Their service department is top-notch. My car is always ready when promised, and the work is done right the first time. The staff is friendly and never tries to upsell unnecessary services."
    },
    {
      id: 4,
      name: "Meera Joshi",
      position: "Teacher",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      content: "As a first-time car buyer, I appreciated the patience and guidance from the Plus Marketing team. They took the time to understand my needs and helped me find a reliable car within my budget."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
        <p className="text-lg text-muted-foreground">
          Don't just take our word for it. Here's what our valued customers have to say about their experience with Plus Marketing.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Mobile Testimonials (Single View) */}
        <div className="md:hidden">
          <div className="flex justify-center mb-8">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Testimonials (Multi View) */}
        <div 
          ref={ref}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "transition-all duration-1000 ease-out",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                { "delay-[200ms]": isInView && index === 1 },
                { "delay-[400ms]": isInView && index === 2 }
              )}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
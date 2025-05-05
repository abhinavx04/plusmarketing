"use client";

import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <SectionWrapper id="contact" className="bg-muted">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-muted-foreground">
          Have questions or want to schedule a test drive? Reach out to our team and we'll get back to you promptly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground">12/1 Taratala Road, Kolkata 700088</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 9830178245</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">info@plusmarketing.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
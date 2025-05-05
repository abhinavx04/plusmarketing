"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div
            className={cn(
              "relative h-[400px] md:h-[500px] rounded-lg overflow-hidden transition-all duration-1000 ease-out",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}
          >
            <Image
              src="https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Luxury car showroom"
              fill
              className="object-cover"
            />
          </div>

          <div 
            className={cn(
              "transition-all duration-1000 ease-out delay-300",
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Plus Marketing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Established in 1998, Plus Marketing has grown to become a premier car dealership in Kolkata, offering a wide range of new and pre-owned vehicles to suit every need and budget.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our commitment to exceptional customer service, transparent dealings, and quality vehicles has earned us a reputation as a trusted name in the automotive industry.
            </p>
            <Button asChild size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
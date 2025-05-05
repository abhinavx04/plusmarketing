import { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Plus Marketing Car Dealership",
  description: "Explore our comprehensive automotive services including sales, financing, and maintenance.",
};

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-12">
          At Plus Marketing, we offer comprehensive automotive solutions to meet all your vehicle needs, from finding your dream car to maintaining it in peak condition.
        </p>
      </section>

      <section className="mb-24">
        <div className="grid grid-cols-1 gap-24">
          {/* Car Sales Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Car Sales</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Find your perfect vehicle from our extensive collection of new and pre-owned cars. Our expert sales team will guide you through our inventory to match you with a car that suits your lifestyle and budget.
              </p>
              <ul className="space-y-3">
                {[
                  "New vehicle sales with the latest models",
                  "Certified pre-owned vehicles with warranty",
                  "Trade-in options for your current vehicle",
                  "Virtual showroom and online reservations",
                  "Test drives and vehicle demonstrations"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="New car showroom"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Financing Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5076518/pexels-photo-5076518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Financing consultation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Financing Options</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our finance team works with multiple lenders to secure competitive rates and flexible terms for your vehicle purchase. We offer tailored solutions to fit your financial situation.
              </p>
              <ul className="space-y-3">
                {[
                  "Competitive interest rates and flexible terms",
                  "Leasing options with manageable monthly payments",
                  "Quick pre-approval process",
                  "Special financing for first-time buyers",
                  "Transparent fee structure with no hidden costs"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vehicle Servicing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Vehicle Servicing</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Keep your vehicle running smoothly with our comprehensive maintenance and repair services. Our certified technicians use the latest diagnostic tools and genuine parts to ensure the highest quality of service.
              </p>
              <ul className="space-y-3">
                {[
                  "Routine maintenance and oil changes",
                  "Comprehensive vehicle inspections",
                  "Engine diagnostics and repairs",
                  "Brake service and tire replacement",
                  "Air conditioning and heating system repairs"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Car service technician"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
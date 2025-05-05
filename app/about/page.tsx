import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Plus Marketing Car Dealership",
  description: "Learn about Plus Marketing's history, mission, and commitment to excellence in automotive sales and service.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">About Plus Marketing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Established in 1998, Plus Marketing has grown from a small local dealership to a premier automotive destination. With over two decades of experience in the industry, we've built a reputation for excellence, integrity, and customer satisfaction.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our mission is simple: to provide exceptional vehicles and service that exceed our customers' expectations. We believe in transparency, fair pricing, and building lasting relationships with our clients.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Modern car dealership showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer First",
              description: "We prioritize customer satisfaction above all else, ensuring every interaction exceeds expectations."
            },
            {
              title: "Integrity",
              description: "Honesty and transparency are the foundation of our business practices and relationships."
            },
            {
              title: "Excellence",
              description: "We strive for excellence in every aspect of our service, from vehicle selection to after-sales support."
            }
          ].map((value, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Johnson",
              position: "General Manager",
              image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "Sarah Thompson",
              position: "Sales Director",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "Michael Rivera",
              position: "Service Manager",
              image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "Emily Chen",
              position: "Finance Manager",
              image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          ].map((member, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
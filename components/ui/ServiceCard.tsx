import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

export default function ServiceCard({ icon, title, description, features, link }: ServiceCardProps) {
  return (
    <div className="bg-card h-full rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button asChild className="w-full mt-auto">
        <Link href={link}>Learn More</Link>
      </Button>
    </div>
  );
}
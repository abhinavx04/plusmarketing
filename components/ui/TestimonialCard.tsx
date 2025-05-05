import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    position: string;
    image: string;
    rating: number;
    content: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-lg h-full flex flex-col hover:yellow-glow transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
    </div>
  );
}
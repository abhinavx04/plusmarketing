import { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Plus Marketing Car Dealership",
  description: "Get in touch with our team for inquiries about vehicles, financing, servicing or to schedule a test drive.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        Have questions about our vehicles or services? Our team is ready to assist you. Reach out to us through the form below or using our contact information.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <ContactForm />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">12/1 Taratala Road, Kolkata 700088</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+91 9830178245</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@plusmarketing.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <div className="text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
        <div className="h-[400px] rounded-lg overflow-hidden bg-muted">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2039376217086!2d88.2857!3d22.5172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMxJzAxLjkiTiA4OMKwMTcnMDguNSJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
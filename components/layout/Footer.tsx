import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-bold text-2xl text-primary mb-4">
              PLUS <span className="text-primary opacity-80">MARKETING</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Premium car dealership offering new and pre-owned vehicles with exceptional service since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "New Cars", href: "/services" },
                { label: "Pre-owned Vehicles", href: "/services" },
                { label: "Financing Options", href: "/services" },
                { label: "Vehicle Servicing", href: "/services" },
                { label: "Parts & Accessories", href: "/services" },
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  12/1 Taratala Road, Kolkata 700088
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">+91 9830178245</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">info@plusmarketing.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {year} Plus Marketing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
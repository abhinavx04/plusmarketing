"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add offset for fixed header
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      closeMenu();
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => scrollToSection('home')} 
            className="font-bold text-2xl md:text-3xl text-primary z-10"
          >
            PLUS <span className="text-primary opacity-80">MARKETING</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "text-sm font-medium hover:text-primary transition-colors",
                      pathname === `/#${link.id}` ? "text-primary" : "text-foreground/70"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <Button onClick={() => scrollToSection('contact')} size="sm">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-foreground p-2 focus:outline-none z-10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm md:hidden z-40">
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8 mb-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "text-xl font-medium hover:text-primary transition-colors",
                      pathname === `/#${link.id}` ? "text-primary" : "text-foreground/70"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollToSection('contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
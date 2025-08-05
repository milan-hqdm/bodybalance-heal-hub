import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ba06a488-9a70-49f8-9fe2-71a674a80e84.png" 
              alt="Body Balance Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-primary">Body Balance</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-smooth">Benefits</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-primary hover:text-primary/80">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(123) 456-7890</span>
              </a>
              <Button variant="cta" size="lg">
                Book Now
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-smooth">Benefits</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-primary font-medium">
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <Button variant="cta" size="lg" className="w-full">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
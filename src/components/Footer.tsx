import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-sage/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/ba06a488-9a70-49f8-9fe2-71a674a80e84.png" 
                alt="Body Balance Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-3 text-lg font-bold text-primary">Body Balance</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professional massage therapy clinic dedicated to your wellness and healing journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-smooth">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@bodybalance.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  info@bodybalance.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>123 Wellness Avenue</p>
                  <p>Suite 200</p>
                  <p>Healthy City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-smooth">Services</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth">About Us</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Book Online</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Gift Cards</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">Contact</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Location</h3>
            <div className="bg-muted rounded-lg h-40 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Interactive Map</p>
                <p className="text-xs">Click for directions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Body Balance. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-muted-foreground">Licensed & Insured</span>
              <span className="text-xs text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
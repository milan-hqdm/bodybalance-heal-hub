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
              Body Balance Massage and Float - Professional massage therapy clinic in American Fork, Utah. 
              Because Health is Happiness.
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
                <a href="tel:(801)855-5834" className="text-muted-foreground hover:text-primary transition-smooth">
                  (801) 855-5834
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
                  <p>366 South 500 East</p>
                  <p>Suite B</p>
                  <p>American Fork, UT 84003</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Mon-Sat: 9:00 AM - 10:00 PM</p>
                  <p>Sunday: Closed</p>
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
            <div className="rounded-lg overflow-hidden h-40">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0234567890123!2d-111.78566390675!3d40.369633782371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzEwLjciTiAxMTHCsDQ3JzA4LjQiVw!5e0!3m2!1sen!2sus!4v1676700445847!5m2!1sen!2sus&q=366+South+500+East,+Suite+B,+American+Fork,+UT+84003"
                width="100%" 
                height="160" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
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
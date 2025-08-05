import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-massage.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional massage therapy session" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-primary-foreground/90 text-sm">5.0 • 500+ Reviews</span>
              <span className="text-primary-foreground/90 text-sm">• Licensed & Insured</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Transform Your
              <span className="block text-coral">Pain Into Peace</span>
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Experience therapeutic relief with our licensed massage therapists. 
              Personalized treatments designed to restore your body and mind to perfect balance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="xl" className="min-w-[200px]">
                Book Your Session
              </Button>
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-primary-foreground/80 text-sm">
              <span>✓ 15+ Years Experience</span>
              <span>✓ Same-Day Appointments</span>
              <span>✓ Insurance Accepted</span>
            </div>
          </div>

          {/* Hero Image - Desktop Only */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Relaxing massage therapy" 
                className="rounded-2xl shadow-strong object-cover w-full h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";
import massageImage from "@/assets/massage-services.jpg";

const MassageServicesSection = () => {
  return (
    <section className="py-20 bg-sage/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <img 
              src={massageImage} 
              alt="Professional massage services" 
              className="rounded-2xl shadow-medium object-cover w-full h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Massage Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our massage services in American Fork, Utah, offer a variety of techniques tailored to your needs. 
              All our massage services are customized to meet your specific needs and preferences.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Swedish Massage - gentle strokes for relaxation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Deep Tissue Massage - targets deeper muscles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Sports Massage - for athletes and recovery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Prenatal/Postnatal Massage - specialized care</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Warm Bamboo Massage - heated bamboo tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Aromatherapy Massage - essential oils included</span>
              </div>
            </div>

            <Button variant="sage" size="lg" className="btn btn-1 hover-filled-slide-down">
              <span>
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassageServicesSection;
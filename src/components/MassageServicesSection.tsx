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
              Experience the healing power of therapeutic massage with our comprehensive range of services. 
              Whether you're seeking relief from chronic pain, recovering from an injury, or simply need to unwind, 
              our skilled therapists provide personalized treatments to meet your specific needs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Swedish Relaxation Massage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Deep Tissue Therapy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Sports Massage & Recovery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Prenatal Massage</span>
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
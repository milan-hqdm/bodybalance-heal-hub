import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";
import virtualTourImage from "@/assets/virtual-tour.jpg";

const VirtualTourSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Take a Virtual Tour of Our Clinic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our tranquil, professional environment before you visit
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={virtualTourImage} 
                alt="Virtual tour of Body Balance clinic" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-smooth"></div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-background/90 rounded-full flex items-center justify-center shadow-strong hover:scale-110 transition-smooth group">
                <Play className="w-8 h-8 text-primary ml-1" />
              </button>
            </div>

            {/* Tour Features */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-medium">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">360° Reception Area</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Treatment Rooms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Relaxation Areas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Changing Rooms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="cta" size="lg">
              Schedule Your Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
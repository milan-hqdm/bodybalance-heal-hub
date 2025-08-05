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
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1676700445847!6m8!1m7!1sCAoSK0FGMVFpcE1fZk9JbDNFTnlDcWtGaF9aeVlFQkhZMXVuZDdaTDZiTXNZMEk.!2m2!1d40.369633782371!2d-111.78566390675!3f163.61!4f-13.150000000000006!5f0.5970117501821992" 
                width="100%" 
                height="500" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[500px]"
              />
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
            <Button variant="cta" size="lg" className="btn btn-1 hover-filled-slide-down">
              <span>Schedule Your Visit</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
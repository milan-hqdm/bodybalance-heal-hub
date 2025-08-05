import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import giftCardImage from "@/assets/gift-card.jpg";
const GiftCardSection = () => {
  return <section className="py-20 bg-sage/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Gift className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">Perfect Gift</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Give the Gift of Wellness
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Perfect for any occasion - birthdays, holidays, or just because. 
              Give your loved ones the gift of relaxation, healing, and self-care 
              with our professional massage therapy services.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Available in any denomination</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Never expires</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Digital or physical delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Transferable to family members</span>
              </div>
            </div>

            <Button variant="cta" size="lg" className="btn btn-1 hover-filled-slide-down bg-zinc-50">
              <span>Buy Gift Card Now</span>
            </Button>
          </div>

          {/* Gift Card Visual */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
              <img src="/lovable-uploads/92a040de-810e-4096-bf17-44238111510a.png" alt="Body Balance Gift Card" className="w-full rounded-xl shadow-soft" />
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Popular amounts:</p>
                <div className="flex justify-center space-x-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$100</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$150</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GiftCardSection;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past hero section (roughly 100vh)
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button 
        variant="cta" 
        size="lg" 
        className="btn btn-1 hover-filled-slide-down rounded-full shadow-strong hover:shadow-strong animate-pulse min-w-[140px]"
      >
        <span>
          <Calendar className="w-5 h-5 mr-2" />
          Book Now
        </span>
      </Button>
    </div>
  );
};

export default StickyBookingButton;
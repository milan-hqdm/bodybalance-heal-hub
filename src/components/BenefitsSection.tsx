import { Button } from "@/components/ui/button";
import { Heart, Zap, Activity, Moon, Trophy, Brain } from "lucide-react";
const BenefitsSection = () => {
  const benefits = [{
    icon: Heart,
    title: "Stress Reduction & Relaxation",
    description: "Lower cortisol levels and activate your body's natural relaxation response for improved mental clarity."
  }, {
    icon: Zap,
    title: "Pain Relief & Tension Release",
    description: "Target chronic pain, muscle knots, and tension to restore comfort and mobility to your daily life."
  }, {
    icon: Activity,
    title: "Improved Circulation & Flexibility",
    description: "Enhance blood flow and increase range of motion for better physical performance and recovery."
  }, {
    icon: Moon,
    title: "Better Sleep Quality",
    description: "Promote deeper, more restorative sleep patterns through relaxation and stress hormone regulation."
  }, {
    icon: Trophy,
    title: "Enhanced Athletic Performance",
    description: "Accelerate recovery, prevent injuries, and optimize muscle function for peak athletic achievement."
  }, {
    icon: Brain,
    title: "Reduced Anxiety & Depression",
    description: "Boost mood-regulating neurotransmitters like serotonin and dopamine for improved mental wellness."
  }];
  return <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Button */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="lg:flex-1 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Proven Benefits of Massage Therapy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scientific research consistently shows that regular massage therapy provides measurable 
                improvements in both physical and mental health. Experience these evidence-based benefits 
                with our professional therapeutic treatments.
              </p>
              
              <div className="bg-sage/20 rounded-lg p-6 mt-8">
                <p className="text-sm text-muted-foreground mb-2">Research shows:</p>
                <p className="text-foreground font-medium">
                  "Regular massage therapy reduces cortisol levels by up to 31% and increases 
                  serotonin by 28% while improving pain scores by an average of 40%."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  - American Massage Therapy Association Research
                </p>
              </div>
            </div>
            
            <div className="lg:flex-shrink-0 bg-zinc-300 hover:bg-zinc-200">
              <Button variant="cta" size="lg" className="btn btn-1 hover-filled-slide-down">
                <span>Experience These Benefits Today</span>
              </Button>
            </div>
          </div>

          {/* Benefits Grid - 2 rows, 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-card hover:shadow-soft transition-smooth group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;
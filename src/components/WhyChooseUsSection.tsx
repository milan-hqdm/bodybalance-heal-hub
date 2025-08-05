import { Award, Heart, Sparkles } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified Therapists",
      description: "Our team consists of highly trained, licensed massage therapists with years of experience in therapeutic bodywork."
    },
    {
      icon: Heart,
      title: "Personalized Treatment Approach",
      description: "Every session is customized to your specific needs, ensuring you receive the most effective treatment for your condition."
    },
    {
      icon: Sparkles,
      title: "State-of-the-Art Facility",
      description: "Experience treatments in our modern, tranquil environment designed to promote healing and relaxation."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Body Balance?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our massage therapy clinic the trusted choice for wellness and healing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-card shadow-soft hover:shadow-medium transition-smooth group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;